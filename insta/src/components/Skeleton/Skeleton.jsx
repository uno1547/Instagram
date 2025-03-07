import style from './Skeleton.module.css'

export default Skeleton = ({ type, width, height }) => {
  return (
    <>
      <div 
        className = {`${style.skeleton} ${style[type]}`}
        style= {{
          width,
          height,
        }}
      >
      </div>
    </>
  )
}