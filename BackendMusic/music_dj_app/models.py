from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings

# Create your models here.

class StudentsReg(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)
    Nome = models.CharField(max_length=250, blank=True, null=False)
    Sobrenome = models.CharField(max_length=300, blank=True, null=False)
    WhatsApp = models.CharField(max_length=350, blank=True, null=False)
    InstrumentoPref = models.CharField(max_length=300, blank=True, null=False)
    Localidade = models.TextField(max_length=550, blank=True, null=False)
    
    def __str__(self):
        return f"{self.Nome} {self.Sobrenome}"
    
    
class Card(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    

from django.db import models

class Feedback(models.Model):
    user = models.CharField(max_length=255)  # Nome do usuário ou ID
    message = models.TextField()  # Texto do feedback
    timestamp = models.DateTimeField(auto_now_add=True)  # Data e hora do feedback

    def __str__(self):
        return f"{self.user} - {self.timestamp}"
    
class Message(models.Model):
    remetente = models.EmailField(),
    destinataio = models.EmailField(),
    conteudo = models.TextField(),
    data_envio = models.DateTimeField(auto_now_add=True)