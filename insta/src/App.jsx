import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

import Sidebar from './components/Sidebar/Sidebar'
import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';
import CreatePage from './pages/CreatePage';
import ProfilePage from './pages/ProfilePage'

import LoginForm from "./components/LoginForm/LoginForm"
import SignupForm from './components/SignupForm/SignupForm'

import Test from './components/Test/Test'

function App() {
  const tokenAtClient = () => {
    return localStorage.getItem("access_token")
    // 이게 서버에 요청보내고 응답 받는거라면?
  }

  const [isAuth, setIsAuth] = useState(tokenAtClient())
  const [userID, setUserID] = useState("")


  return (
    <Router>
      {isAuth ? (
        // 인증된 유저들라우팅
        <>
          <Sidebar/>
          <Routes>
            <Route path='/' element = {<HomePage/>}></Route>
            <Route path='/search' element = {<SearchPage/>}></Route>
            <Route path='/create' element = {<CreatePage/>}></Route>
            <Route path='/:userId' element = {<ProfilePage/>}></Route>
            {/* 만약 /create 이면 ㅋㅋㅋㅋ 이게 검색페이지 라우팅인지 닉네임이 create인 유저의 ProfilePage인지 어캐 구분함 */}
            <Route path='*' element = {<Navigate to="/"/>}></Route> 
          </Routes>
        </>        
      ) : (
        // 로그인 안돼어있을때 라우팅
        <Routes>
          <Route path='/' element = {<LoginForm setIsAuth={setIsAuth}/>}></Route>
          <Route path='/signup' element = {<SignupForm/>}></Route> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Router>  
  )
}

export default App
