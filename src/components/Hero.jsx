import React from "react";
import videoBg from "../assets/hibiscus.mp4";

export default function Hero () {
  
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
          <video src={videoBg} autoPlay loop muted />
          <div className="content">
            <h1>Empower Your Business Through Optimization and Training</h1>
          </div>
      </div>
      
    </>
  )
}

