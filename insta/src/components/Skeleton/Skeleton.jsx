import style from './Skeleton.module.css'

export default function Skeleton({ type, top, right, bottom, left }) {
  return (
    <>
      <div 
        className = {`${style.skeleton} ${style[type]}`}
        style= {{
          top,
          right,
          bottom,
          left
        }}
      >
        {type}
      </div>
    </>
  )
}