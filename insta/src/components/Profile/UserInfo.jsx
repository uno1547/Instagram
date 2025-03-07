import { data } from "react-router-dom";
import style from './UserInfo.module.css'
import Button from "../Button/Button";

function UserInfo({ userID, datas }) {
  // {isYou, isFollowee, postNums, folloerws, followees, article}
  const {isYou, isFollowee, postNums, followers, followees, article} = datas
  console.log(isYou);
  return(
    <div className={style["flex-container"]}>
      <div className={style["image-wrapper"]}>
        <div className={style.image}></div>
      </div>
      <div className={style["lines-wrapper"]}>
        <div className={style.buttons}>
          <span className={style.userID}>{userID}</span>
          {isYou ? (
            <Button text="프로필편집"/>
          ) : (
            isFollowee ? <Button text="팔로잉"/>: <Button text="팔로우" style="blue"/>
          )}
        </div>
        <div className={style.nums}>
          <div className={style.group}>
            <span className={style.tag}>게시물</span>
            <span className={style.num}>{postNums}</span>
          </div>
          <div className={style.group}>
            <span className={style.tag}>팔로워</span>
            <span className={style.num}>{followers}</span>
          </div>
          <div className={style.group}>
            <span className={style.tag}>팔로우</span>
            <span className={style.num}>{followees}</span>
          </div>
        </div>
        <div className={style.introduction}>{article}</div>
      </div>
    </div>
    // <div className="user-info-header">
    //   <div className="profile">프로필 사진</div>
    //   <div className="infos">
    //     <div className=""></div>
    //     <div className="follow-nums"></div>
    //     <div className=""></div>
    //   </div>
    // </div>
  )
}

export default UserInfo