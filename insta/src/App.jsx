import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home'
import HomePage from "./pages/HomePage";
import LoginForm from "./components/LoginForm/LoginForm"
import SignupForm from './components/SignupForm/SignupForm'
import Test from './components/Test/Test'

function App() {
  // const 
  const tokenAtClient = () => {
    return localStorage.getItem("access_token")
    // 이게 서버에 요청보내고 응답 받는거라면?
  }
  const [isAuth, setIsAuth] = useState(tokenAtClient())
  return (
    // <div className='app'>
    //   <Sidebar/>
    // </div>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' element = {null}></Route>
        <Route path='/new' element = {<SignupForm/>}></Route>
        <Route path='/create' element = {<SignupForm/>}></Route>
        <Route path='/signup' element = {<SignupForm/>}></Route>
      </Routes>
    </Router>  
  )
  // {isAuth ? <Sidebar/> : null}
  // <Routes>
      // <Route path='/' element = {isAuth ? <HomePage/> :<LoginForm setIsAuth = {setIsAuth}/>}></Route>
      //   <Route path='/' element = {isAuth ? <HomePage/> :<LoginForm setIsAuth = {setIsAuth}/>}></Route>
      //   {/* <Route path='/new' element = {<NewPage/>}></Route> */}
      //   {/* <Route path='/profile' element = {<ProfilePage/>}></Route> */}
      //   <Route path='/signup' element = {<SignupForm/>}></Route>
      //   {/* 모든 라우팅이 결국에 로그인여부에 따라 달라짐 이걸 APP 레벨에서 관리하면 좀 편하려나??
      //   예를 들면 로그인 */}
      // </Routes>
}

export default App
