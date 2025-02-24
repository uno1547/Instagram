import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SignupForm from './components/SignupForm/SignupForm'
import DashboardPage from './pages/DashboardPage'
import Test from './components/Test/Test'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/signup' element = {<SignupForm/>}></Route>
        <Route path='/profile' element = {<ProfilePage/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
