from rest_framework.serializers import ModelSerializer
from users.serializers import UserSerializer
from .models import Recipe


class RecipeSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'