from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import StudentsReg

class StudentForm(UserCreationForm):
    class Meta:
        model = StudentsReg
        fields = '__all__'

class StudentChangeForm(UserChangeForm):
    class Meta:
        model = StudentsReg
        fields = '__all__'
        
class StudentPostForm(forms.ModelForm):
     class Meta:
        model = StudentsReg
        fields = '__all__'