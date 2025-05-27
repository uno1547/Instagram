import { useContext } from "react"

import Gallery from "./Gallery.jsx"
// import style from "./ModifyModal.module.css"

import { ModifyContext } from "../../context/ModifyContext.js"
import style from "./ModifyModal.module.css"
const ModifyModal = () => {
  const {images, context} = useContext(ModifyContext)
  // console.log(images, context);
  return (
    <div className={style["modal-background"]} onClick={e => console.log('수정창 모달 핸들러')}>
      <div className={style["modify-modal"]}>
        <div className="modify-image">
          <Gallery images = {images} children={<button className={style.deleteBtn} onClick={null}>X</button>}/>
        </div>
        <div className="modify-content">

        </div>
      </div>
    </div>
  )
}

export default ModifyModal