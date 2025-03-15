import { useEffect } from 'react'
import style from './OverLay.module.css'
import List from '../List/List.jsx'

const FollowListModal = ({ handler, toFind }) => {
  useEffect(() => {
    return () => {
      console.log('followlist modal 언마운트');
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