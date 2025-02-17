import { useState } from "react";

function Test() {
  const [value, setValue] = useState("")
  console.log('rerender');
  const handler = (evt) => {
    console.log(value);
    setValue(evt.target.value)
  }

  return (
    <>
      <h1>{value}</h1>
      <input type="text" onChange={handler}/>
    </>
  )
}

export default Test