from rest_framework import serializers # type: ignore
from .models import StudentsReg, Card
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import CustomUser, Feedback, Message
from django.contrib.auth.password_validation import validate_password

User = get_user_model()

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

# Customiza o retorno do JWT
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['email'] = user.email
        return token

# Serializador para criar usuários
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user
    
    def update(self, instance, validated_data):
        # Atualiza os campos fornecidos no validated_data
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)

        # Atualiza a senha, se fornecida
        password = validated_data.get('password', None)
        if password:
            instance.set_password(password)

        instance.save()
        return instance
    
    def validate_password(self, value):
        validate_password(value)  # Valida força da senha
        return value
    
    def validate(self, data):
    # Verifica se o campo 'password' está presente nos dados
        if 'password' not in data:
            raise serializers.ValidationError({"error": "O campo 'password' é obrigatório."})

    # Adicione aqui qualquer validação extra para o campo 'password'
        if len(data['password']) < 8:  # Exemplo de validação de comprimento mínimo
            raise serializers.ValidationError({"password": "A senha deve ter pelo menos 8 caracteres."})

        return data




class StudentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = StudentsReg
        fields = '__all__'
        
class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'
        
        
def validate_email(self, value):
    if CustomUser.objects.filter(email=value).exists():
        raise serializers.ValidationError("Este e-mail já está em uso.")
    return value

def validate_username(self, value):
    if CustomUser.objects.filter(username=value).exists():
        raise serializers.ValidationError("Este nome de usuário já está em uso.")
    return value


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'
