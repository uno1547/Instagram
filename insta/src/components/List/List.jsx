import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext.js";
import style from './List.module.css'
import ListItem from './ListItem.jsx'
import Skeleton from "../Skeleton/Skeleton.jsx";
import FollowListSkeleton from "../Skeleton/FollowListSkeleton.jsx";

const arr = new Array(100).fill(null).map((_, idx) => {
  return idx + 1
})

const followers = [
  {
    userID : "팔로워1",
  },
  {
    userID : "팔로워2",
  },
  {
    userID : "팔로워3",
  },
  {
    userID : "팔로워4",
  },
  {
    userID : "팔로워5",
  },
  {
    userID : "팔로워6",
  }, 
  {
    userID : "팔로워7",
  },
  {
    userID : "팔로워8",
  },
  {
    userID : "팔로워9",
  },
  {
    userID : "팔로워10",
  },
  {
    userID : "팔로워11",
  },
  {
    userID : "팔로워12",
  },
  {
    userID : "팔로워13",
  },
  {
    userID : "팔로워14",
  }, 
  {
    userID : "팔로워15",
  },
  {
    userID : "팔로워16",
  }
]
const followings = [
  {
    userID : "팔로잉1",
  },
  {
    userID : "팔로잉2",
  },
  {
    userID : "팔로잉3",
  },
  {
    userID : "팔로잉4",
  },
  {
    userID : "팔로잉5",
  },
  {
    userID : "팔로잉6",
  }, 
  {
    userID : "팔로잉7",
  },
  {
    userID : "팔로잉8",
  },
  {
    userID : "팔로잉9",
  },
  {
    userID : "팔로잉10",
  },
  {
    userID : "팔로잉11",
  },
  {
    userID : "팔로잉12",
  },
  {
    userID : "팔로잉13",
  },
  {
    userID : "팔로잉14",
  }, 
  {
    userID : "팔로잉15",
  },
  {
    userID : "팔로잉16",
  }
]
// console.log(arr);

const List = ({ handler, toFind }) => {
  useEffect(() => {
    return () => {
      console.log('list 언마운트');
    }
  }, [])
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [keyWord, setKeyWord] = useState("")

  const {userID} = useContext(UserContext)
  // console.log('profilePage의', userID, '여긴 List');

  const fetchData = async () => {
    // console.log(toFind, '보기');
    try {
      const response = await fetch(`http://localhost:8080/api/users/${userID}/${toFind}`)
      const data = await response.json()
      // console.log(data);
      setData(data)
      // setData(arr2)

    } catch(err) {

    } finally {
      setIsLoading(false)
    }
  }
  
  const filteredFollowers = data?.filter(follower => {
    return follower.userID.includes(keyWord)
  })
  // console.log(filteredFollowers);

  useEffect(() => {
    const handleKeyDown = e => {
      if(e.key === "Escape") handler()
    }
    document.addEventListener("keydown", handleKeyDown)
    // console.log('effect!');
    setIsLoading(true) 
    fetchData()
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const changeHandler = e => {
    // console.log(e.target.value);
    const newkeyWord = e.target.value
    setKeyWord(newkeyWord)
    // console.log(`changeHandler 위치에서 ${data.length} ${isLoading} ${keyWord} state`);
  }

  return (
    <div className={style.modal}>
      <div className={style.head}>
        <span className={style.text}>팔로워</span>
        <button className={style.closeButton} onClick={e => {
          e.stopPropagation()
          console.log('x버튼 트리거');
          // if(e.target == e.currentTarget) handler()
          handler()
        }}>X</button>
      </div>
      <input className={style.searchBar} placeholder="검색" onChange={changeHandler}></input>

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
      filteredFollowers.length ? (
        filteredFollowers.map((el, idx) => {
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