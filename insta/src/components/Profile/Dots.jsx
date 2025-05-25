const Dots = ({ length, imgIdx }) => {
  console.log('dots 랜더링!!');
  return (
    <>
      {Array.from({length : length}).map((el, idx) => {
        return <Dot cur = {idx == imgIdx} key={`${el},${idx}`}/>
      })}
    </>
  )
}
const Dot = ({ cur }) => {
  return (
    <span>{cur ? "O" : "X"}</span>
  )
}

export default Dots