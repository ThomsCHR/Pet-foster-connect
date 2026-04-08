
import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './components/pages/home.page'
import AnimauxPage from './components/pages/animaux.page'
import AssociationsPage from './components/pages/associations.page'
import AssociationDetailPage from './components/pages/association.page.detail'
import AnimalDetailPage from './components/pages/animal.page'
import RegisterPage from './components/pages/connexion.register.page'
import NavigationBar from "./components/modules/navigationbar";

function App() {
  return (
    <>
      <NavigationBar isLogged={false} connectedUser={null} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animals" element={<AnimauxPage />} />
        <Route path="/associations" element={<AssociationsPage />} />
        <Route path="/associations/:id" element={<AssociationDetailPage isLogged={false} connectedUser={null} />} />
        <Route path="/animals/:id" element={<AnimalDetailPage isLogged={false} connectedUser={null} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App
