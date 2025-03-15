import style from './ListItem.module.css'
import Button from '../Button/Button'
import Skeleton from '../Skeleton/Skeleton'
import { Link } from 'react-router-dom'

const ListItem = ({ member }) => {
  return (
    <div className={style.item}>
      <div className={style.profile}>
        <Skeleton type={"image"} width={"50px"} height={"50px"}/>
        <Link to= {`/${member.userID}`}>{member.userID}</Link>
      </div>
      <Button text= "삭제"/>
    </div>
  )
}

export default ListItem