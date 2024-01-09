# Recipe Sharing Web Application
Welcome to the Recipe Sharing Web Application repository! This project is built using Django Rest Framework for the backend API and React for the frontend user interface. It provides a platform for users to share, discover, and explore various recipes.

## Features
- **User Authentication**: Secure user registration and authentication system.
- **Recipe Creation**: Users can create, edit, and delete their own recipes.
- **Recipe Discovery**: Browse and search for recipes based on categories, ingredients, or keywords.
- **User Profiles**: Users have personalized profiles showcasing their recipes, favorite recipes, and other details.
- **Responsive Design**: A user-friendly interface accessible on both desktop and mobile devices.

## Technologies Used

- **Backend**: Django Rest Framework, PostgreSQL (or your preferred database), Django ORM.
- **Frontend**: React.js, Axios for API requests.
- **Authentication**: JWT (JSON Web Tokens) for secure authentication.
- **Styling**: CSS Modules, Bootstrap (optional).

## Setup Instructions

### Backend Setup

1. Navigate to the `foodieapi` directory.
2. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
3. Run database migrations:
   ```
   python manage.py makemigrations
   python manage.py migrate
   ```
4. Start the Development server:
   ```
   python manage.py runserver
   ```
## Frontend Setup
1. Install the required Node.js packages:
   ```
   npm install
   ```
2. Start the React development server:
   ```
   npm start
   ```
# API Endpoints
1. User Registration: POST /api/users/register/
2. User Login: POST /api/users/login/
3. Create Recipe: POST /api/recipes/create/
4. List Recipes: GET /api/recipes/
5. Retrieve Recipe: GET /api/recipes/<recipe_id>/
6. Update Recipe: PUT /api/recipes/<recipe_id>/
7. Delete Recipe: DELETE /api/recipes/<recipe_id>/
