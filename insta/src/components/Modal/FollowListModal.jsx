import style from './OverLay.module.css'
import List from '../List/List.jsx'

const FollowListModal = ({ handler }) => {
  return (
    <div className={style["modal-overlay"]}>
      <List handler = {handler}/>
    </div>
  )
}
export default FollowListModal