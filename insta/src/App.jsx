import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<LoginPage/>}></Route>
        {/* <Route path='/dashboard' element = {<DashboardPage/>}></Route> */}
      </Routes>
    </Router>
  )
}

export default App
