from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# class Artist(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     # Additional artist fields (e.g., bio, portfolio, etc.)
#
#     def __str__(self):
#         return self.user.username

class Artwork(models.Model):
    artist = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.ImageField(upload_to='artworks/')
    created_at = models.DateTimeField(auto_now_add=True)
    # Additional artwork fields (e.g., image, category, etc.)

    def __str__(self):
        return self.title

# class Commission(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     artwork = models.ForeignKey(Artwork, on_delete=models.CASCADE)
#     message = models.TextField()
#     # Additional commission fields (e.g., status, deadline, etc.)
#
#     def __str__(self):
#         return f"Commission #{self.id} - {self.user.username}"

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    artwork = models.ForeignKey(Artwork, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    total_price = models.DecimalField(max_digits=8, decimal_places=2)
    # Additional order fields (e.g., status, payment method, etc.)

    def __str__(self):
        return f"Order #{self.id} - {self.user.username}"

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    artworks = models.ManyToManyField(Artwork)
