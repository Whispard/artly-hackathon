from django.urls import path
from .views import UserCreateView, UserLoginView, UserListAPIView, UserDetailView
from rest_framework.authtoken import views as authtoken_views

urlpatterns = [
    # Other URL patterns
    path('create/', UserCreateView.as_view(), name='user-create'),
    path('login/', UserLoginView.as_view(), name='user_login'),
    path('list/', UserListAPIView.as_view(), name='user-list'),
    path('<int:user_id>/', UserDetailView.as_view(), name='user-details'),

]
