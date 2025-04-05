import { useEffect, useRef, useState } from "react"

import style from "./Dropdown.module.css"


const DropdownList = ({setDropdown, dropRef}) => {
  console.log(dropRef);
  useEffect(() => {
    const clickHandler = e => {
      console.log('이건 document 에서 감지된 클릭 핸들러');
      if(dropRef.current && !dropRef.current.contains(e.target)) {
        console.log('외부 클릭!');
        setDropdown(prev => !prev)
      }
    }
    const timer = setTimeout(() => {
      document.addEventListener("click", clickHandler)
    }, 0)

    return () => {
      clearTimeout(timer)
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
    console.log('이건 ... 에서 감지된 클릭 핸들러');
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