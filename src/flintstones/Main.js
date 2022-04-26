import { React, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Main.css";

function Flintstones() {
  const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   const onScroll = () => console.log(window.pageYOffset);
  //   // clean up code
  //   window.removeEventListener("scroll", onScroll);
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <div class="body">
      {/* <video autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video> */}
      <div class="center-text">
        <p>Flintstones</p>
      </div>
    </div>
  );
}

export default Flintstones;
