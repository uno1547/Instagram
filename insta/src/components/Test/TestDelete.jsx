import { useState, useEffect } from "react";

function TestDelete() {
  const [datas, setData] = useState(null)
  console.log('render');
  useEffect(() => {
    fetch("http://localhost:4000/articles", {
      method : "POST"
    }).then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
      <h1>test delete</h1>
      {datas?.map(data => {
        return <div key={data.id}>{data.id} {data.title}</div>
      })}
    </>
  )
}

export default TestDelete