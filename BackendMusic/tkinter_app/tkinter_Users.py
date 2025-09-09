import tkinter as tk
from tkinter import ttk
import requests
from tkinter import messagebox

tokens = {
    "access": None,
    "refresh": None
}

# Função para buscar os dados do backend Django

def login():
    global tokens
    login_url = "http://127.0.0.1:8000/login/"
    data = {"username": "seu_usuario", "password": "sua_senha"}
    try:
        response = requests.post(login_url, json=data)
        if response.status_code == 200:
            tokens["access"] = response.json().get("access")
            tokens["refresh"] = response.json().get("refresh")
            print("Login bem-sucedido!")
        else:
            print("Erro ao fazer login:", response.status_code)
    except Exception as e:
        print(f"Erro de conexão ao fazer login: {e}")
        
def refresh_access_token():
    global tokens
    refresh_url = "http://127.0.0.1:8000/refresh/"
    data = {"refresh": tokens["refresh"]}
    try:
        response = requests.post(refresh_url, json=data)
        if response.status_code == 200:
            tokens["access"] = response.json().get("access")
            print("Access token renovado com sucesso!")
        else:
            messagebox.showerror("Erro", "Não foi possível renovar o access token.")
    except Exception as e:
        messagebox.showerror("Erro", f"Erro ao renovar token: {e}")


def fetch_data():
    global tokens
    api_url = "http://127.0.0.1:8000/profile/"
    headers = {
        "Authorization": f"Bearer {tokens['access']}"
    }
    try:
        print("Enviando requisição para:", api_url)
        print("Cabeçalhos:", headers)
        response = requests.get(api_url, headers=headers)
        print("Resposta do servidor:", response.status_code, response.text)

        if response.status_code == 401:
            print("Token expirado. Renovando...")
            refresh_access_token()
            headers["Authorization"] = f"Bearer {tokens['access']}"
            response = requests.get(api_url, headers=headers)
            print("Nova resposta:", response.status_code, response.text)

        if response.status_code == 200:
            return response.json()
        else:
            messagebox.showerror("Erro", f"Erro ao buscar dados: {response.status_code}")
            return []
    except Exception as e:
        messagebox.showerror("Erro", f"Erro de conexão ao buscar dados: {e}")
        return []


# Função para exibir os dados em uma tabela Tkinter


    
def show_data():
    data = fetch_data()
    if not data:
        return

    tree.delete(*tree.get_children())
    tree.insert("", "end", values=(data["id"], data["username"], data["email"]))

login()

# Janela principal
window = tk.Tk()
window.title("Lista de Usuários")
window.geometry("800x400")

# Configuração do estilo para o Treeview
style = ttk.Style()
style.configure("Treeview.Heading", font=("Arial", 15, "bold"))  # Estilo do cabeçalho

columns = ("ID", "Username", "Email")  # Colunas da tabela
tree = ttk.Treeview(window, columns=columns, show="headings")

# Configurações das colunas
for col in columns:
    tree.heading(col, text=col)
    tree.column(col, width=150, anchor="center")

tree.pack(fill=tk.BOTH, expand=True)

# Botão para carregar os dados
load_button = tk.Button(
    window, 
    text="Carregar Dados", 
    command=show_data,
    bg="blue",
    fg="white",
    font=("Arial", 12, "bold")
)
load_button.pack(pady=10)

# Executa a interface
window.mainloop()