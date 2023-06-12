from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User


class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'profile_picture', 'bio', 'is_artist', 'commission_rate')
