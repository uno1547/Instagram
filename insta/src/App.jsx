import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import Test from './components/Test/Test'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<HomePage/>}></Route>
        <Route path='/test' element = {<Test/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
