from django.urls import path
from .views import RecipeCreateView, RecipeListView, RecipeDetailView, UserRecipeListView, RecipeUpdateView, RecipeDeleteView

urlpatterns = [
    path('', RecipeListView.as_view(), name='recipes'),
    path('create/', RecipeCreateView.as_view(), name='recipe-create'),
    path('<int:pk>/', RecipeDetailView.as_view(), name='recipe-detail'),
    path('user-recipes/', UserRecipeListView.as_view(), name='user-recipes'),
    path('<int:pk>/update/', RecipeUpdateView.as_view(), name='recipe-update'),
    path('<int:pk>/delete', RecipeDeleteView.as_view(), name='recipe-delete')
]