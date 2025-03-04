/*

*/
import { useParams } from "react-router-dom"

// import Header from '../components/Header/Header'
// import UserInfo from "../components/Profile/UserInfo"
// import Posts from "../components/Profile/Posts"


function ProfilePage() {
  const { userId } = useParams()
  // userId가 실제로 존재하지않는 사람일수도 있음 userDB에 존재하지않는 그러면 없는사람이라고 표시? 하거나 잘못된페이지 표시(실제 instagram)
  
  return(
    <div>
      {userId} 프로필 페이지
    </div>
  )
}

export default ProfilePage