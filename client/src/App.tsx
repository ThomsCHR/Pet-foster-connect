import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './components/pages/home.page'
import AnimauxPage from './components/pages/animaux.page'
import AssociationsPage from './components/pages/associations.page'
import AssociationDetailPage from './components/pages/association.page.detail'
import AnimalDetailPage from './components/pages/animal.page'
import RegisterPage from './components/pages/connexion.register.page'
import LoginPage from './components/pages/connexion.login.page'
import VolunteerPage from './components/pages/volunteer.page'
import NavigationBar from "./components/modules/navigationbar"
import { useAuth } from './contexts/AuthContext'

function App() {
  const { isLogged, connectedUser } = useAuth();

  return (
    <>
      <NavigationBar isLogged={isLogged} connectedUser={connectedUser} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animals" element={<AnimauxPage />} />
        <Route path="/associations" element={<AssociationsPage />} />
        <Route path="/associations/:id" element={<AssociationDetailPage isLogged={isLogged} connectedUser={connectedUser} />} />
        <Route path="/animals/:id" element={<AnimalDetailPage isLogged={isLogged} connectedUser={connectedUser} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/volunteer/:id" element={<VolunteerPage />} />
      </Routes>
    </>
  )
}

export default App
