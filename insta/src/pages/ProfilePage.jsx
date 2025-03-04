/*

*/
import { useParams } from "react-router-dom"

// import UserInfo from "../components/Profile/UserInfo"
// import UserPosts from "../components/Profile/UserPosts"


function ProfilePage() {
  /*
  서버로부터 받은 userId의 사용자에 대한 정보를 토대로, UserInfo, UserPosts를 랜더링 해야한다.
  이때 UserInfo의 경우, parameter로 받은 userId와 localStorage의 토큰을 해독한 userId를 비교
  ()같은 사용자라면 본인프로필에 해당하는 화면(프로필편집, 등 개인정보조회등)을 랜더링
  다른 사용자라면 제3자의 프로필을 볼때처럼 팔로우 요청, 메세지 보내기 등이 보여야한다.
  
  */
  console.log('profile페이지 랜더링');
  const { userId } = useParams()
  // userId로 불러온 사용자 정보를 state로 설정하고, 각 UserInfo, UserPost에 props로 넘겨줄예정
  // userId가 실제로 존재하지않는 사람일수도 있음 userDB에 존재하지않는 그러면 없는사람이라고 표시? 하거나 잘못된페이지 표시(실제 instagram)
  // userId에 따라서 내프로필 창 vs 다른 사람 프로필 창
  return(
    <div>
      {userId} 프로필 페이지
      {/* 사용자 헤더 정보 컴포넌트 */}
      {/* 사용자 게시글 정보 컴포넌트 */}
    </div>
  )
}

export default ProfilePage