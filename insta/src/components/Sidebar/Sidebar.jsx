import { Link, NavLink } from "react-router-dom"
import style from "./Sidebar.module.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useState } from "react";

function Sidebar() {
  const [] = useState() // 여기서 유저 정보 불러와야하는듯 로컬스토리지의 jwt토큰으로 서버에 물어보자
  const userId = "peter" // 불러온 유저 닉네임이 들어가있어야함
  return(
    <nav>
      <div className={style.logo}>
        <Link to="/">
        Instagram
        </Link>
      </div>
      <ul className={style.navs}>
        <li>
          <Link to="/">
            <HomeOutlinedIcon fontSize="large"/>홈
          </Link>
        </li>
        <li>
          <Link to="/search">
            <SearchSharpIcon fontSize="large"/>검색
          </Link>
        </li>
        <li>
          <Link to="/create">
            <AddCircleOutlineOutlinedIcon fontSize="large"/>만들기
          </Link>
        </li>
        <li>
          <Link to= {`/${userId}`}>
          <PersonOutlinedIcon fontSize="large"/>프로필
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar