/*

*/
import { useLocation, useParams } from "react-router-dom"

import UserInfo from "../components/Profile/UserInfo"
import UserPosts from "../components/Profile/UserPosts"
import { useEffect, useState } from "react"
// import LoadingPage from "./LoadingPage"
// import NotFoundPage from "./NotFoundPage"
import Skeleton from "../components/Skeleton/Skeleton"
import style from './ProfilePage.module.css'


function ProfilePage() {
  /*
    params로 넘어온 userId에 대해서 정보가 필요함 1) 존재하는 사용자인지아닌지 2) 존재하는 사용자면 본인인지 제3자인지 3) 제3자면 팔로우가 되있는사람인지 아닌사람인지 4)숫자와 소개글
    서버에게 물어보자 존재하는지안하는지 res {status : 400, message : 존재하지않는 사용자} 처럼
    본인인지 제3자인지, 음 이거는 토큰껴서 물어보면 응답해줄수있겠는데, 모든 요청에 토큰을 껴서 보낸다?

    정보 받아와서 존재하는 사용자면 사정보를 표시하고
    로딩중 > 없는 사용자 > 없는 사용자인것같아요
    로딩중 > 존재하는 사용자 > datas를 UserInfo컴포넌트에 전달, UserPossts데이터 요청 시작
  */
  const [isLoading, setLoading] = useState(true) //
  const [userData, setUserData] = useState(null)



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

      setLoading(!isLoading)
      // 존재하지않는 사용자이거나 토큰 오류면 빠르게 리턴
      if(!response.ok) {
        return
      }

      const data = await response.json() //data 준비완료
      setUserData(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    console.log('effect');
    getProfileInfos()
  }, [])

  return(
    isLoading ? // 로딩중일때 스켈레톤 표신
    <div className={style.inner}>
      <div className={style["skeleton-wrapper"]}>
        <Skeleton type = {"article"}/>
        <Skeleton type = {"article"}/>
        <Skeleton type = {"image"}/>
      </div>
      <div className={style["skeleton-wrapper"]}>
        <Skeleton type = {"article"}/>
        <Skeleton type = {"article"}/>
        <Skeleton type = {"image"}/>
      </div>
    </div> : // 로딩완료시 userData에 따라 랜더링
    userData ? (
    <div>
      <UserInfo/>
      <UserPosts/>
    </div>
    ) : (
      <>
        <span>사용자가없어요</span>
      </>
    )
  )
}

export default ProfilePage