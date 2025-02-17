import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import Test from './components/Test/Test'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<LoginPage/>}></Route>
        {/* <Route path='/test' element = {<Test/>}></Route> */}
      </Routes>
    </Router>
    
  )
}

export default App
