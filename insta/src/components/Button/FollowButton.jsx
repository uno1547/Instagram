import { useState } from "react";
import Button from "./Button";
/*
 * Button컴포넌트를 활용하되 state를 추가하고
 * handler 를 추가함
 * 
 */
const follow = () => {
  // 실제로는 서버에 팔로우 요청을하는 코드
  return new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, 2000)
  })
}

const FollowButton = ({ isFollwee }) => {
  const [isFollow, setIsFollow] = useState(isFollwee)
  const [isLoading, setIsLoading] = useState(false)

  const toggleFollow = async () => {
    setIsLoading(true)
    const response = await follow()
    setIsFollow(prev => !prev)
    setIsLoading(false)
  }

  return (
    <Button text={isLoading ? "----" : isFollow ? "팔로잉" : "팔로우"} style={isFollow ? "default" : "blue"}handler={toggleFollow} ></Button>
    // isFollow ? 
    // <Button text={isLoading ? "----" : "팔로잉"} style="default" handler={toggleFollow}/> 
    // :
    // <Button text={isLoading ? "----" : "팔로우"} style="blue" handler={toggleFollow}/>
  )
}
export default FollowButton