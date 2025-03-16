import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Test = () => {
  const param = useParams()
  // console.log(param);
  const still = "hey"
  console.log('test컴포넌트 랜더링');

  useEffect(() => {
    console.log('effect');
    // return () => {
    //   console.log('unmount!');
    // }
  }, [param])
  return (
    <div>
      <Link to = "/dynamic/otherparam">링크변화</Link>
    </div>
  )
}

export default Test