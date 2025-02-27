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
        {/* 모든 라우팅이 결국에 로그인여부에 따라 달라짐 이걸 APP 레벨에서 관리하면 좀 편하려나??
        예를 들면 로그인 */}
        <Route path='/profile' element = {<ProfilePage/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
