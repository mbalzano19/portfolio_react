import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NewOrderPage from '../Projects/Projects'
// import AuthPage from '../AuthPage/AuthPage'
import HomePage from '../HomePage/HomePage'
import NavBar from '../../components/NavBar/NavBar'
import Contact from '../ContactPage/ContactPage'
import Projects from '../Projects/Projects'
import BioPage from '../BioPage/BioPage'
import { getUser } from '../../utilities/users-service'

export default function App() {


  return (
   <main className="App">


        <NavBar />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/bio' element={<BioPage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>


   </main>
  )
}


