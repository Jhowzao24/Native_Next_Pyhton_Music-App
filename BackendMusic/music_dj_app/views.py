from django.shortcuts import render
from django.http import HttpResponse # type: ignore
from rest_framework import viewsets # type: ignore
from .models import StudentsReg, Card
from .serializers import StudentsSerializers, CardSerializer, RegisterSerializer, CustomTokenObtainPairSerializer
from rest_framework.response import Response # type: ignore
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import CustomUser
from rest_framework.permissions import BasePermission
import subprocess
from rest_framework.generics import CreateAPIView, DestroyAPIView
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
import requests
from .models import Feedback
from .serializers import FeedbackSerializer, MessageSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token

class UserTokenView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Busca o token do usuário logado
        token, created = Token.objects.get_or_create(user=request.user)

        return Response({"token": token.key})

class SendMessageView(APIView):
    def post(self, request):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(),
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FeedbackView(APIView):
    def get(self, request):
        feedbacks = Feedback.objects.all()
        serializer = FeedbackSerializer(feedbacks, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

User = get_user_model()
class UserActivityView(APIView):
    def get(self, request):
        data = [
            {"userId": 1, "lastLogin": "2025-03-29T18:00:00Z", "ipAddress": "192.168.0.1"},
            {"userId": 2, "lastLogin": "2025-03-28T12:45:00Z", "ipAddress": "192.168.0.2"},
        ]
        return Response(data)

class UserEmailAuthenticationAPI(APIView):
    def post(self, request):
        email = request.data.get('email')
        try:
            user = User.objects.get(email=email)
            return Response({
                'success': True,
                'message': 'Email autenticado com sucesso.',
                'user_id': user.id
            }, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({
                'success': False,
                'message': 'Email não encontrado.'
            }, status=status.HTTP_404_NOT_FOUND)


class UserManagementAPI(APIView):
    def put(self, request, user_id):
        user = get_object_or_404(User, id=user_id)
        user.username = request.data.get('username', user.username)
        user.email = request.data.get('email', user.email)
        if 'password' in request.data:
            user.set_password(request.data.get('password'))
        user.save()
        return Response({
            'success': True,
            'message': 'Dados atualizados com sucesso.'
        }, status=status.HTTP_200_OK)

    def delete(self, request, user_id):
        user = get_object_or_404(User, id=user_id)
        user.delete()
        return Response({
            'success': True,
            'message': 'Usuário excluído com sucesso.'
        }, status=status.HTTP_204_NO_CONTENT)



@api_view(['GET'])
def get_logged_user(request):
    user = request.user  # Identifica o usuário autenticado
    if user.is_authenticated:
        data = {
            "id": user.id,
            "username": user.username,
            "email": user.email
        }
        return JsonResponse(data)
    else:
        return JsonResponse({"error": "Usuário não autenticado"}, status=401)


def refresh_access_token():
    global tokens
    url = "http://127.0.0.1:8000/refresh/"  # Endpoint para renovar o token
    data = {"refresh": tokens["refresh"]}
    try:
        response = requests.post(url, json=data)
        if response.status_code == 200:
            new_access_token = response.json().get("access")
            tokens["access"] = new_access_token  # Atualiza o token global
            print("Access token renovado com sucesso!")
            return new_access_token
        else:
            print("Erro ao renovar access token:", response.status_code)
            return None
    except Exception as e:
        print(f"Erro de conexão ao renovar token: {e}")
        return None

class DeleteUserView(DestroyAPIView):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response({"message": "Usuário excluído com sucesso"}, status=200)

def abrir_tkinter_datas_users(request):
    subprocess.Popen(["python", "tkinter_app/tkinter_Datas_Users.py"])
    return HttpResponse("Interface Tkinter aberta!")

def open_tkinter_users_registers(request):
    subprocess.Popen(["python", "tkinter_app/tkinter_Users.py"])
    return HttpResponse("Interface Tkinter Aberta")

@api_view(['GET'])
@login_required
def get_user_profile(request):
    user = request.user
    serializer = RegisterSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@login_required
def get_all_users(request):
    users = User.objects.all()
    data = [{"id": user.id, "username": user.username, "email": user.email} for user in users]
    return Response(data, status=200)


@api_view(['GET', 'PUT'])
@login_required
def update_user_profile(request):
    user = request.user
    if request.method == 'GET':
        data = {
            "username": user.username,
            "email": user.email,
        }
        return JsonResponse(data)
    
    if request.method == 'PUT':
        serializer = RegisterSerializer(user, data=request.data, partial=True)  # Atualização parcial
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Perfil atualizado com sucesso!', 'data': serializer.data}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@login_required
def delete_user_account(request):
    user = request.user
    user.delete()
    return Response({'message': 'Conta excluída com sucesso!'})

@api_view(['POST'])
def authenticate_user_email(request):
    email = request.data.get('email')
    try:
        # Busca o usuário no CustomUser
        user = CustomUser.objects.get(email=email)
        return Response({'success': True, 'message': 'Usuário autenticado com sucesso.', 'user_id': user.id})
    except CustomUser.DoesNotExist:
        return Response({'success': False, 'message': 'Email não encontrado.'}, status=status.HTTP_404_NOT_FOUND)


class IsEmailAuthenticated(BasePermission):
    def has_permission(self, request, view):
        # Verifique se o email foi autenticado
        return request.session.get('email_authenticated', False)


class StudentsViews(viewsets.ModelViewSet):
    permission_classes = [IsEmailAuthenticated]

# Rota para registro de usuários
@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "Usuário criado com sucesso."}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Rota para login (JWT)
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

# Rota para logout (invalidar token)
class LogoutView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()  # Invalida o token
            return Response({"message": "Logout realizado com sucesso."}, status=200)
        except Exception as e:
            return Response({"error": "Token inválido ou expirado."}, status=400)

# Create your views here.

class StudentsViews(viewsets.ModelViewSet):
    queryset = StudentsReg.objects.all()
    serializer_class = StudentsSerializers
    filter_backends = [OrderingFilter]
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['Nome', 'Localidade', 'InstrumentoPref']
    search_fields = ['Nome', 'InstrumentoPref']
    ordering = ['Nome']
    ordering_fields = [
        'Nome',
        'Sobrenome',
        'WhatsApp',
        'InstrumentoPref',
        'Localidade'
    ]
    
    def update(self, request, *args, **kwargs):
        print(request.data)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, *args, **kwargs):
        instance=self.get_object()
        try:
            self.perform_destroy(instance)
            return Response({'message': 'Registro excluído com sucesso!'}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def perform_destroy(self, instance):
        instance.delete()




    
class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    
    
def Undexing(request):
    return HttpResponse("""
                 <Center>
                    <h1>Welcome to the Django Back-End Environment<h1/>
                    <br/>
                    <h3>Here will appear the datas of the uers from your project</h3>
                    <br/><br/>
                    <img src="https://maxmautner.com/public/images/django.gif" alt="django"/>
                <center/>
                 """)
    
class ValidateUserView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        name = request.data.get("name")
        user = request.user

        if not name:
            return Response({"isValid": False, "message": "Nome não fornecido!"}, status=400)

        # Verifica se há um registro associado ao usuário autenticado
        is_valid = StudentsReg.objects.filter(user=user, Nome=name).exists()

        return Response({
            "isValid": is_valid,
            "message": "Validação Bem Sucedida!" if is_valid else "Usuário ou nome inválido!!"
        })
        
        
class UserDataView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        name = request.query_params.get("name")  # Obtém o nome da query string

        if not name:
            return Response({"error": "Nome não fornecido"}, status=400)

        # Busca os dados do usuário autenticado pelo nome
        student = StudentsReg.objects.filter(user=user, Nome=name).first()

        if not student:
            return Response({"error": "Usuário não encontrado"}, status=404)

        return Response({
            "Nome": student.Nome,
            "Sobrenome": student.Sobrenome,
            "WhatsApp": student.WhatsApp,
            "InstrumentoPref": student.InstrumentoPref,
            "Localidade": student.Localidade
        })
