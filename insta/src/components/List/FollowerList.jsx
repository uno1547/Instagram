import { useState, useEffect } from "react";
import style from './FollowerList.module.css'

const arr = new Array(100).fill(null).map((_, idx) => {
  return idx + 1
})
console.log(arr);

const FollowerList = ({ handler }) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    await new Promise((res, rej) => {
      setTimeout(() => {
        res()
      }, 2000);
    })

    setData(arr)
    setIsLoading(false)
  }
  
  useEffect(() => {
    const handleKeyDown = e => {
      if(e.key === "Escape") handler()
    }
    document.addEventListener("keydown", handleKeyDown)
    console.log('effect!');
    setIsLoading(true)
    fetchData()
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className={style.modal}>
      <div className={style.head}>
        <span className={style.text}>팔로워</span>
        <button className={style.closeButton}>X</button>
      </div>
      <input className={style.searchBar} placeholder="검색"></input>

      <div className={style.list}>
      {isLoading ? (
        <div>스켈레톤</div>
      ) : 
      data ? (
        data.map(el => {
          return <div>{el}</div>
        })
      ):(
        <div>결과없음</div>
      )}

      </div>
    </div>
  ) 
}
export default FollowerList