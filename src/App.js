import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import RegisterUserForm from './components/RegisterUserForm';
import RecipeShareForm from './components/RecipeShareForm';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import Dashboard from './pages/Dashboard';
import RecipeUpdatePage from './pages/RecipeUpdatePage';


function App() {

  return (
    <div className="App">
      <Router>
      <AuthProvider>
        <Navbar />
          <Routes>
            <Route element={<PrivateRoutes/>}>
              <Route element={<RecipeList/>} path="/" exact/>
              <Route element={<RecipeShareForm />} path='/recipe-share'/>
              <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
              <Route path='/dashboard/:username' element={< Dashboard />} />
              <Route path="/recipes/:recipeId/update" element={<RecipeUpdatePage />} />
            </Route>
            <Route path="/login" element={<LoginPage />}/>
            <Route path='/register' element={<RegisterUserForm />} />
          </Routes>
      </AuthProvider>
    </Router>
    </div>
  
    
  );
}

export default App;
