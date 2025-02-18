import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import Test from './components/Test/Test'
import TestGet from './components/Test/TestGet'
import TestPost from './components/Test/TestPost'
import TestUpdate from './components/Test/TestUpdate'
import TestDelete from './components/Test/TestDelete'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<LoginPage/>}></Route>
        <Route path='/test' element = {<Test/>}></Route>
        <Route path='/testget' element = {<TestGet/>}></Route>
        <Route path='/testpost' element = {<TestPost/>}></Route>
        <Route path='/testupdate' element = {<TestUpdate/>}></Route>
        <Route path='/testdelete' element = {<TestDelete/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
