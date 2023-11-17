from django.db import models
from django.utils.translation import gettext_lazy as _
from users.models import AppUser

class Recipe(models.Model):
    title = models.CharField(max_length=250, blank=False)
    ingredients = models.TextField(blank=False)
    instructions = models.TextField(blank=False)
    image = models.ImageField(_('Image'), blank=False, upload_to='meal_image/')
    chef = models.CharField(max_length=250, blank=False)

    def __str__(self):
        return self.title
