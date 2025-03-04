import { Link, NavLink } from "react-router-dom"
import style from "./Sidebar.module.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

function Sidebar() {
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
            <HomeOutlinedIcon fontSize="small"/>홈
          </Link>
        </li>
        <li>
          <Link to="/search">
            <SearchSharpIcon fontSize="small"/>검색
          </Link>
        </li>
        <li>
          <Link to="/create">
            <AddCircleOutlineOutlinedIcon fontSize="small"/>만들기
          </Link>
        </li>
        <li>
          <Link to="/profile">
          <PersonOutlinedIcon fontSize="small"/>프로필
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar