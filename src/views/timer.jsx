import React from "react";

import { useState, useEffect } from "react";
import "../assets/css/timer.css";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

export default function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [miniutes, setminiutes] = useState(0);
  const [isActivemin, setIsActivemin] = useState(false);
  const [miliseconds, setmilliseconds] = useState(0);
  const [isActivemilli, setIsActivemilli] = useState(false);

  const[currentTime,setCurrentTime]=useState(0)

  function toggle() {
    setIsActive(!isActive);
  }
  function togglemin() {
    setIsActivemin(!isActivemin);
  }
  function togglemilli() {
    setIsActivemilli(!isActivemilli);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }
  function resetmin() {
    setminiutes(0);
    setIsActivemin(false);
  }
  function resetmilli() {
    setmilliseconds(0);
    setIsActivemilli(false);
  }
  useEffect(()=>{
      


  },[miliseconds],[seconds],[miniutes])

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  useEffect(() => {
    let interval = null;
    if (isActivemin) {
      interval = setInterval(() => {
        setminiutes((miniutes) => miniutes + 1);
      }, 1000 * 60);
    } else if (!isActivemin && miniutes !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActivemin, miniutes]);
  useEffect(() => {
    let interval = null;
    if (isActivemilli) {
      interval = setInterval(() => {
        setmilliseconds((miliseconds) => miliseconds + 100);
      }, 100);
    } else if (!isActivemilli && miliseconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActivemilli, miliseconds]);

  return (
    <div
      className="app"
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingTop:50
      }}
    >
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <div className="time">{miniutes}min</div>
          <button
            className={`button button-primary button-primary-${
              isActivemin ? "active" : "inactive"
            }`}
            onClick={togglemin}
          >
            {isActivemin ? "Pause" : "Start"}
          </button>
          <button className="button" onClick={resetmin}>
            Reset
          </button>
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <div className="time">{seconds}s</div>

          <button
            className={`button button-primary button-primary-${
              isActive ? "active" : "inactive"
            }`}
            onClick={toggle}
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button className="button" onClick={reset}>
            Reset
          </button>
        </GridItem>{" "}
        <GridItem xs={12} sm={4} md={4}>
          <div className="time">{miliseconds}ms</div>
          <button
            className={`button button-primary button-primary-${
              isActivemilli ? "active" : "inactive"
            }`}
            onClick={togglemilli}
          >
            {isActivemilli ? "Pause" : "Start"}
          </button>
          <button className="button" onClick={resetmilli}>
            Reset
          </button>
        </GridItem>
      </GridContainer>
      
     
      <GridContainer>
          <GridItem md="2"></GridItem>
        <GridItem
          md="8"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <h2 style={{color:"white"}}>Total: {miniutes} min {seconds} sec {miliseconds} ms </h2> 
        </GridItem>
        <GridItem md="2"></GridItem>
      </GridContainer>
    </div>
  );
}
