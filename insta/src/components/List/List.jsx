import { useState, useEffect } from "react";
import style from './List.module.css'
import ListItem from './ListItem.jsx'
import Skeleton from "../Skeleton/Skeleton.jsx";
import FollowListSkeleton from "../Skeleton/FollowListSkeleton.jsx";

const arr = new Array(100).fill(null).map((_, idx) => {
  return idx + 1
})

const arr2 = [
  {
    name : "사람1",
  },
  {
    name : "사람2",
  },
  {
    name : "사람3",
  },
  {
    name : "사람4",
  },
  {
    name : "사람5",
  },
  {
    name : "사람6",
  }, 
  {
    name : "사람7",
  },
  {
    name : "사람8",
  },
  {
    name : "사람9",
  },
  {
    name : "사람10",
  },
  {
    name : "사람11",
  },
  {
    name : "사람12",
  },
  {
    name : "사람13",
  },
  {
    name : "사람14",
  }, 
  {
    name : "사람15",
  },
  {
    name : "사람16",
  }
]
console.log(arr);

const List = ({ handler }) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    await new Promise((res, rej) => {
      setTimeout(() => {
        res()
      }, 2000);
    })

    setData(arr2)
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
        <>
          <FollowListSkeleton/>
          <FollowListSkeleton/>
          <FollowListSkeleton/>
          <FollowListSkeleton/>
          <FollowListSkeleton/>
        </>
      ) : 
      data ? (
        data.map((el, idx) => {
          // return <div>{el.name}</div>
          return <ListItem member = {el} key={idx}/>
        })
      ):(
        <div>결과없음</div>
      )}

      </div>
    </div>
  ) 
}
export default List