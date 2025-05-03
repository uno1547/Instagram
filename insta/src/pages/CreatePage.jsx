import { useState } from "react";
import style from "./CreatePage.module.css"
function CreatePage() {
  const [files, setFiles] = useState([])

  /*
    1. 최초 '사진을 선택해주세요'누르면
    2. finder표시 여기서 한개/여러개 선택 > formData에 추가
    3. '열기' 누르면 택한만큼 팔레트처럼 보이기 ex 2개면 콤마콤마, 화살표 버튼, +버튼나오게, 0개면 그냥 처음 "사진을 선택해주세요" 버튼 보이게
    4. 팔레트에서 +누르면 더 추가 가능함, 팔레트에서 x누르면 삭제가능함
    5. 글 작성하러가기 버튼 존재
    6. 글 작성 창에서도 팔레트의 사진들 볼수있음
  */
  const fileChangeHandler = e => {
    const files = e.target.files
    if(files.length == 0) return
    console.log(files);
    // const arr = 3
    const arr = Array.from(files)
    console.log(arr);
    setFiles(prev => [...prev, ...arr])

  }

  const removeHandler = imgIdx => {
    // console.log(idx);
    // setFiles(e => e)
    setFiles(prev => prev.filter((el, idx) => idx != imgIdx))
  }

  return(
    <>
      <input type="file" accept="image/*" multiple id="file-input" onChange={fileChangeHandler}  className={style["input-file"]}/>
      <label htmlFor="file-input">사진을 선택해주세요</label>
      {files.map((file, idx) => {
        const previewURL = URL.createObjectURL(file)
        return (
          <div key={file.name} className={style.pallette}>
            <img src={previewURL} alt="" style={{width : "200px", height : "200px", objectFit : "cover"}}/>
            {/* <span>{file.name}</span> */}
            <button onClick={() => removeHandler(idx)}>삭제</button>
          </div>
        )
      })}
    </>
  )
}

export default CreatePage