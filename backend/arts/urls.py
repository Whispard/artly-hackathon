from django.urls import path
from .views import ArtworkCreateView, ArtworkListView, ArtworkDetailView, BuyView, AddToCartView, CartView, \
    RemoveFromCartView, get_artworks_by_user

# app_name = 'your_app_name'

urlpatterns = [
    path('create/', ArtworkCreateView.as_view(), name='artwork-create'),
    path('', ArtworkListView.as_view(), name='artwork-list'),
    path('user/<int:user_id>/', get_artworks_by_user, name='artwork-list-by-user'),
    path('<int:pk>/', ArtworkDetailView.as_view(), name='artwork-detail'),
    path('<int:artwork_id>/add-to-cart/', AddToCartView.as_view(), name='add-to-cart'),
    path('buy/', BuyView.as_view(), name='buy'),
    path('cart/', CartView.as_view(), name='cart'),
    path('<int:artwork_id>/remove-from-cart/', RemoveFromCartView.as_view(), name='remove-from-cart'),

]
