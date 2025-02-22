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
import Hello from './components/Test/Hello'
import Hello1 from './components/Test/Hello'
import Hello2 from './components/Test/Hello'
import TestLogin1 from './components/Test/TestLogin1'
import TestLogin2 from './components/Test/TestLogin2'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<LoginPage/>}></Route>
        <Route path='/test' element = {<Test/>}></Route>
        {/* <Route path='/testget' element = {<TestGet/>}></Route> */}
        {/* <Route path='/testpost' element = {<TestPost/>}></Route> */}
        {/* <Route path='/testupdate' element = {<TestUpdate/>}></Route> */}
        {/* <Route path='/testdelete' element = {<TestDelete/>}></Route> */}
        <Route path='/hello' element = {<Hello/>}></Route>
        <Route path='/login-response' element = {<TestLogin1/>}></Route>
        <Route path='/login-cookie' element = {<TestLogin2/>}></Route>
        <Route path='/hello-response' element = {<Hello1/>}></Route>
        <Route path='/hello-cookie' element = {<Hello2/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
