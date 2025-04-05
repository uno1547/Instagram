import { useEffect, useRef, useState } from "react"

import style from "./Dropdown.module.css"


const DropdownList = ({setDropdown, dropRef}) => {
  console.log(dropRef);
  useEffect(() => {
    const clickHandler = e => {
      if(dropRef.current && !dropRef.current.contains(e.target)) {
        console.log('외부 클릭!');
        // setDropdown(prev => !prev)
      }
    }
    document.addEventListener("click", clickHandler)

    return () => {
      document.removeEventListener("click", clickHandler)
    }
  }, [])
  return (
    <div className={style.list} ref = {dropRef}>
      <ul>
        <li>수정하기</li>
        <li>삭제하기</li>
      </ul>
    </div>
  )
}

const DropdownToggleButton = () => {
  const [dropdown, setDropdown] = useState(false)
  const dropdownRef = useRef(null)

  const dropdownToggle = e => {
    if(e.target === e.currentTarget) setDropdown(prev => !prev)
  }

  return (
    <>
      <div onClick={dropdownToggle} className={style.button}>
        ... 
        {dropdown ? <DropdownList setDropdown={setDropdown} dropRef = {dropdownRef}/> : null}
      </div>
    </>
  )
}

export default DropdownToggleButton