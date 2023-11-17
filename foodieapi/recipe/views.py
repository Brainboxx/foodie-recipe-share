from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, RetrieveUpdateAPIView, RetrieveDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from .serializers import RecipeSerializer
from .models import Recipe
from .permissions import IsOwnerOrReadOnly


class RecipeCreateView(CreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]


class RecipeListView(ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeDetailView(RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class UserRecipeListView(ListAPIView):
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Recipe.objects.filter(chef=user.username)


class RecipeUpdateView(RetrieveUpdateAPIView):
    allowed_methods = ['PUT']
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    def perform_update(self, serializer):
        serializer.save(chef=self.request.user.username)


class RecipeDeleteView(RetrieveDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    def perform_destroy(self, instance):
        return super().perform_destroy(instance)

    
