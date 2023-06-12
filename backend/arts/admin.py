from django.contrib import admin
from matplotlib.artist import Artist

from arts.models import Artwork, Order, Cart

# Register your models here.
admin.site.register(Artwork)
admin.site.register(Order)
admin.site.register(Cart)