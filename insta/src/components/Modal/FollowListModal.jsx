import { useEffect, useContext } from 'react'
import style from './OverLay.module.css'
import List from '../List/List.jsx'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext.js'

const FollowListModal = ({ handler, toFind }) => {
  const navigate = useNavigate()
  const {userID} = useContext(UserContext) // 얘는 로그인한 사용자꺼라 무조건 내프로필로 가게됌 현재 url의 userId params를 봐야함
  useEffect(() => {
    console.log('followlist modal mount');
    return () => {
      console.log('followlist modal unmount');
      navigate(`/${userID}`) // 이렇게 되면 모든 팔로워 모달을 닫으면 내프로필로 이동하게된다...
    }
  }, [])
  return (
    <div className={style["modal-overlay"]} onClick={e => {
      // console.log('overlay에서 click트리거됨');
      // console.log(e.target, e.currentTarget);
      if(e.target == e.currentTarget) handler()
    }}>
      <List handler = {handler} toFind = {toFind}/>
    </div>
  )
}
export default FollowListModal