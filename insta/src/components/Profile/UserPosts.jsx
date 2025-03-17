import Posts from "./Posts";
import style from "./UserPosts.module.css"
function UserPosts( { datas } ) {
  // console.log('userpost render!');
  console.log(datas);
  // console.log(posts);
  return(
    <div className={style.grid}>
      {datas?.length ? datas.map(data => {
        return <Posts key={data.id} content={data.context}/>
      }) : <h1>no articles</h1>}
    </div>
  )
}

export default UserPosts