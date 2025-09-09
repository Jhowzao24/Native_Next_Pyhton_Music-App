from django.contrib import admin
from .models import StudentsReg
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    # Configura os campos que serão exibidos na lista de usuários no admin
    list_display = ('username', 'email', 'password')
    # Campos utilizados para buscar usuários
    search_fields = ('email', 'username', 'password')
    # Define os campos que podem ser editados diretamente na lista
    list_editable = ('email',)
    # Campos detalhados exibidos no formulário de edição
    fieldsets = UserAdmin.fieldsets + (
        ('Informações Adicionais', {'fields': ('campo_personalizado1', 'campo_personalizado2')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)


# Register your models here.


admin.site.register(StudentsReg)