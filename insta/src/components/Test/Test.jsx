import { useState, useEffect } from "react";
import Skeleton from "../Skeleton/Skeleton";
import LoadingPage from "../../pages/LoadingPage";


function Test() {
  
  return (
    <div style={{
      width : "1000px",
      // height : "500px",
      margin : "auto",
    }}>
      <div style={{
        display : "flex",
        height : "400px",
        alignItems : "center"
      }}>
        <div style={{
          display : "flex",
          justifyContent : "center",
          alignItems : "center",
          flex : "3"
        }}>
          <Skeleton type = {"image"} />
        </div>
        <div style={{
          display : "flex",
          flexDirection : "column",
          justifyContent : "space-evenly",
          paddingLeft : "100px",
          height : "240px",
          flex : "7"
        }}>
          <Skeleton type = {"article"} />
          <Skeleton type = {"article"} width= "340px"/>
          <Skeleton type = {"article"} height= "100px"/>
        </div>
      </div>
      {/* <div>
        <Skeleton type = {"article"}/>
        <Skeleton type = {"article"}/>
        <Skeleton type = {"image"}/>
      </div> */}
    </div>
  )
}

export default Test