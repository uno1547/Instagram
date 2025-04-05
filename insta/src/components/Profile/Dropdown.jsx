import { useState } from "react"

import style from "./Dropdown.module.css"


const DropdownList = ({dropdown}) => {
  return (
    <div className={`${style.list} ${dropdown ? style.show : ""}`}>
      <ul>
        <li>수정하기</li>
        <li>삭제하기</li>
      </ul>
    </div>
  )
}

const DropdownToggleButton = () => {
  const [dropdown, setDropdown] = useState(false)

  const dropdownToggle = () => {
    setDropdown(prev => !prev)
  }

  return (
    <>
      <div onClick={dropdownToggle} className={style.button}>
        ... 
        {dropdown ? <DropdownList dropdown={dropdown}/> : null}
      </div>
    </>
  )
}

export default DropdownToggleButton