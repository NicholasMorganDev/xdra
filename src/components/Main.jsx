import React from "react";
import videoBg from "../assets/hibiscus.mp4";

export default function Main () {
  
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
          <video src={videoBg} autoPlay loop muted />
          {/* <script>videoBg.playbackRate = "2.0"</script> */}
          <div className="content">
            <h1>We Cultivate Business Growth</h1>
            <h1>Through Process Optimization</h1>
            <h1>and Training</h1>
          </div>
      </div>
      
    </>
  )
}

