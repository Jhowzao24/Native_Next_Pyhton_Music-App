import tkinter as tk
from tkinter import ttk
import requests
from tkinter import messagebox

# Função para buscar os dados do backend Django
def fetch_data():
    api_url = "http://localhost:8000/Urls/ViewsStudy/"  # Substitua pela URL correta da sua API

    try:
        response = requests.get(api_url)
        if response.status_code == 200:
            return response.json()  # Retorna os dados como lista de dicionários
        else:
            messagebox.showerror("Erro", f"Erro ao buscar dados: {response.status_code}")
            return []
    except Exception as e:
        messagebox.showerror("Erro", f"Erro de conexão: {e}")
        return []

# Função para exibir os dados em uma tabela Tkinter
def show_data():
    data = fetch_data()  # Busca os dados do backend

    for i, user in enumerate(data):
        tree.insert("", "end", values=(
            user.get("id"),
            user.get("Nome"),
            user.get("Sobrenome"),
            user.get("WhatsApp"),
            user.get("InstrumentoPref"),
            user.get("Localidade")
        ))

# Janela principal
window = tk.Tk()
window.title("Lista de Usuários")
window.geometry("1200x400")


style = ttk.Style()
style.configure("Treeview", 
                font=("Arial", 12, "bold"),  # Fonte e tamanho do cabeçalho
                foreground="white",         # Cor do texto do cabeçalho
                background="blue",          # Cor de fundo do cabeçalho
                borderwidth=1)  

columns = ("ID", "Nome", "Sobrenome", "WhatsApp", "Instrumento Preferido", "Localidade")
tree = ttk.Treeview(window, columns=columns, show="headings")

# Configurações das colunas
for col in columns:
    tree.heading(col, text=col)
    tree.column(col, width=150)

tree.pack(fill=tk.BOTH, expand=True)

# Botão para carregar os dados
load_button = tk.Button(
    window, 
    text="Carregar Dados", 
    command=show_data, 
    bg="blue",      # Cor de fundo do botão
    fg="cyan",       # Cor do texto
    font=("Arial", 14, "bold"),  # Fonte do texto (nome, tamanho, estilo)
    relief="raised",     # Estilo da borda (raised, sunken, flat, groove, ridge)
    bd=5,                # Espessura da borda
    padx=10,             # Espaçamento interno horizontal
    pady=5               # Espaçamento interno vertical
)
load_button.pack(pady=10)

# Executa a interface
window.mainloop()
