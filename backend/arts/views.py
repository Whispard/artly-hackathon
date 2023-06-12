from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.decorators import api_view

from .models import Artwork, Cart, Order
from .serializers import ArtworkSerializer

class ArtworkCreateView(generics.CreateAPIView):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer


class ArtworkListView(generics.ListAPIView):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer

@api_view(['GET'])
def get_artworks_by_user(request, user_id):
    artworks = Artwork.objects.filter(artist=user_id)
    serializer = ArtworkSerializer(artworks, many=True)
    return Response(serializer.data)


class ArtworkDetailView(generics.RetrieveAPIView):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer


from rest_framework.views import APIView
from rest_framework.response import Response

class AddToCartView(APIView):
    def post(self, request, artwork_id):
        artwork = Artwork.objects.get(pk=artwork_id)
        print(request.user)
        cart, created = Cart.objects.get_or_create(user=request.user.id)
        cart.artworks.add(artwork)
        cart.save()
        return Response({'message': 'Artwork added to cart.'})


class CartView(APIView):
    def get(self, request):
        cart = Cart.objects.get(user=request.user.id)
        artworks = cart.artworks.all()
        # Serialize the artworks data as per your serializer
        serialized_data = ArtworkSerializer(artworks, many=True).data
        return Response(serialized_data)

class RemoveFromCartView(APIView):
    def delete(self, request, artwork_id):
        cart = Cart.objects.get(user=request.user)
        artwork = Artwork.objects.get(pk=artwork_id)
        cart.artworks.remove(artwork)
        return Response({'message': 'Artwork removed from cart.'})

class BuyView(APIView):
    def post(self, request):
        cart = Cart.objects.get(user=request.user)
        artworks = cart.artworks.all()
        total_amount = sum(artwork.price for artwork in artworks)
        order = Order.objects.create(user=request.user, total_amount=total_amount)
        order.artworks.set(artworks)
        order.save()
        cart.artworks.clear()
        return Response({'message': 'Order placed successfully.'})
