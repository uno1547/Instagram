import { useState, useEffect } from "react";
import Skeleton from "../Skeleton/Skeleton";
import LoadingPage from "../../pages/LoadingPage";


function Test() {
  
  return (
    <div style={{
      width : "1000px",
      // height : "500px",
      margin : "auto",
      backgroundColor : "blue",
      position : "relative"
    }}>
      <div style={{
        // position : "relative",
        display : "flex",
        height : "300px",
        border : "1px solid black",
      }}>
        <div style={{
          // height : "100%",
          backgroundColor : "red",
          position : "relative",
          flex : "3"
        }}>
          <Skeleton type = {"image"} top="0px" bottom="0px" left="0px" right="0px"/>
        </div>
        <div style={{
          // height : "100%",
          backgroundColor : "green",
          position : "relative",
          // display : "flex",
          // flexDirection : "column",
          flex : "7"
        }}>
          <Skeleton type = {"article"} top="10px" left="0px" right="0px"/>
          <Skeleton type = {"article"} top="40px" left="0px" right="0px"/>
          <Skeleton type = {"article"} top="50px" left="0px" right="0px"/>
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