import style from './OverLay.module.css'
import FollowerList from '../List/FollowerList'

const FollowListModal = ({ handler }) => {
  return (
    <div className={style["modal-overlay"]}>
      <FollowerList handler = {handler}/>
    </div>
  )
}
export default FollowListModal