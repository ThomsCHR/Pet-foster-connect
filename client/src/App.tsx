
import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './components/pages/home.page'
import AnimauxPage from './components/pages/animaux.page'
import NavigationBar from "./components/modules/navigationbar";

function App() {
  return (
    <>
      <NavigationBar isLogged={false} connectedUser={null} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animals" element={<AnimauxPage />} />
      </Routes>
    </>
  )
}

export default App
