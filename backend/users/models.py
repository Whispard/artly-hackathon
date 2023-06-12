from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
from django.db import models

# from arts.models import Artwork


class User(AbstractUser):
    # Additional fields for your user model

    profile_picture = models.ImageField(upload_to='profiles/', blank=True)
    bio = models.TextField(max_length=500, blank=True)

    # Fields for commission requests
    is_artist = models.BooleanField(default=False)
    commission_rate = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)

    # Fields for favorites and cart
    #favorites = models.ManyToManyField(Artwork, related_name='users_who_favorited', blank=True)
    #cart = models.ManyToManyField(Artwork, related_name='users_in_cart', blank=True)

    # Other fields and methods as per your requirements

    def __str__(self):
        return self.username
