import Posts from "./Posts";

function UserPosts( { datas } ) {
  // console.log('userpost render!');
  console.log(datas);
  // console.log(posts);
  return(
    <>
      {datas?.length ? datas.map(data => {
        return <Posts key={data.id} content={data.context}/>
      }) : <h1>no articles</h1>}
    </>
  )
}

export default UserPosts