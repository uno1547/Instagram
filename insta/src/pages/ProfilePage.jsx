/*

*/
import { useLocation, useParams } from "react-router-dom"

import UserInfo from "../components/Profile/UserInfo"
import UserPosts from "../components/Profile/UserPosts"
import { useEffect } from "react"


function ProfilePage() {
  /*
    params로 넘어온 userId에 대해서 정보가 필요함 1) 존재하는 사용자인지아닌지 2) 존재하는 사용자면 본인인지 제3자인지 3) 제3자면 팔로우가 되있는사람인지 아닌사람인지 4)숫자와 소개글
    서버에게 물어보자 존재하는지안하는지 res {status : 400, message : 존재하지않는 사용자} 처럼
    본인인지 제3자인지, 음 이거는 토큰껴서 물어보면 응답해줄수있겠는데, 모든 요청에 토큰을 껴서 보낸다?
  */
  console.log('profilePage랜더링');
  const {userId} = useParams()
  console.log(userId);
  const getProfileInfos = async () => {
    console.log('요청시작');
    try {
      const response = await fetch(`http://localhost:8080/api/user/profile/${userId}`, {
        headers : {
          Authorization : `Bearer ${localStorage.getItem("access_token")}`
        }
      })
      const data = await response.json()
      console.log(data);
    } catch (error) {
      console.log(error);
    }
 
 
  }
  useEffect(() => {
    console.log('effect');
    getProfileInfos()
  }, [])

  return(
    <div>
      {/* { auth ? `${userId} 나의 프로필` : `${userId}님의 프로필` }   */}
      {<UserInfo userId = {userId}/>}
      {<UserPosts userId = {userId}/>}
    </div>
  )
}

export default ProfilePage