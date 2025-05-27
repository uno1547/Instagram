import { useState } from "react"
import Dots from "./Dots"
import style from "./ModifyGallery.module.css"

const ModifyGallery = ({ images }) => {
  // images는 props로 받고
  // state로 idx? 혹은 문자열 배열추가해서, 
  const [idx, setIdx] = useState(0)
    const prevHandler = () => {
    setIdx(prev => {
      return prev == 0 ? prev : prev - 1
    })
  }

  const nextHandler = () => {
    setIdx(prev => {
      // return prev == dummyImages.length - 1 ? prev : prev + 1
      return prev == images?.length - 1 ? prev : prev + 1
    })
  }
  return (
    <div className={style.gallery}>
      <img className = {style["gallery-img"]}src={images?.[idx]}/>
      <button className={`${style.btn} ${style.prevBtn}`} onClick={prevHandler} disabled = {idx == 0}>&lt;</button>
      <button className={`${style.btn} ${style.nextBtn}`} onClick={nextHandler} disabled = {idx == images?.length - 1}>&gt;</button>
      <div className={style.pagination}>
        <Dots length={images?.length} imgIdx={idx} setIdx = {setIdx}/>
      </div>
    </div>
  )
}
export default ModifyGallery