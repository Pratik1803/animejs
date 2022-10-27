import React, { useState, useEffect, useRef } from "react";
import Styles from "../../styles/basic/basic.module.scss";
import anime from "animejs";

const Basics = () => {
  const animation = useRef(null);
  const arr = [];
  for (let i = 0; i < 70; i++) {
    arr[i] = 0;
  }
  console.log(arr);

  function handleAnimation() {
    animation.current.play();
  }

  function Row() {
    return arr
      .slice(0, 14)
      .map((_) => <div className={`${Styles.block} block`}></div>);
  }

  useEffect(() => {
    animation.current = anime({
      targets: ".block",
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 600 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      delay: anime.stagger(200, { grid: [5, 14], from: "center" }),
      loop: true,
    });
    return () => {
      animation.current = null;
    };
  });

  return (
    <div className={Styles.basics}>
      {arr.slice(0, 14).map((ele) => (
        <div>
          {arr.slice(0, 5).map((_) => (
            <div className={`${Styles.block} block`}></div>
          ))}
        </div>
      ))}

      <button onClick={handleAnimation}>Stop/Play</button>
    </div>
  );
};

export default Basics;
