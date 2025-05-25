const dummyImages = [
  "https://lh5.googleusercontent.com/proxy/L-7hpYqmY-2V_IKWV89REZtjUlfVJU6plm3iyjqd9a7Dwo-Act81XCKZraUa1fv2HLCJfUk5MwY21z1MN6GUoBYmEhEMwqE0nwI2d37SVM3H",
  "https://www.palnews.co.kr/news/photo/201801/92969_25283_5321.jpg",
  "https://cdn.imweb.me/upload/S20210720ef466f4f488bc/8082829da5e97.jpg"
]
import { useState } from "react"
import Dots from "./Dots"

import style from "./Gallery.module.css"

const Gallery = ({ images }) => {
  const [idx, setIdx] = useState(0)
  // console.log(idx);

  const prevHandler = () => {
    setIdx(prev => {
      return prev == 0 ? prev : prev - 1
    })

    // setIdx(prev => {
    //   if(prev == 0) {
    //     console.log(prev, '0이었네!');
    //     return prev
    //   }
    //   console.log(prev, '이전값 0아니네 감소!');
    //   return prev - 1
    // })
  }

  const nextHandler = () => {
    setIdx(prev => {
      return prev == dummyImages.length - 1 ? prev : prev + 1
      // return prev == images.length - 1 ? prev : prev + 1
    })

    // setIdx(prev => {
    //   if(prev == dummyImages.length - 1) {
    //     console.log(prev, '맨마지막 Idx었네!');
    //     return prev
    //   }
    //   console.log(prev, '이전값 0아니네 감소!');
    //   return prev + 1
    // })
  }
  return (
    <div className={style.gallery}>
      <img className = {style["gallery-img"]}src={dummyImages[idx]}/>
      <button className={`${style.btn} ${style.prevBtn}`} onClick={prevHandler}>&lt;</button>
      <button className={`${style.btn} ${style.nextBtn}`} onClick={nextHandler}>&gt;</button>
      <div className={style.pagination}>
        <Dots length={dummyImages.length} imgIdx={idx}/>
      </div>
    </div>
  )
}

export default Gallery