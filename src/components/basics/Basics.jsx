import React, { useState, useEffect, useRef } from "react";
import Styles from "../../styles/basic/basic.module.scss";
import anime from "animejs";

const Basics = () => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current = anime({
      targets: ".block",
      translateX: function (el) {
        return el.getAttribute("data-x");
      },
      translateY: function (el, i) {
        return 50 + -50 * i;
      },
      scale: function (el, i, l) {
        return l - i + 0.25;
      },
      rotate: function () {
        return anime.random(-360, 360);
      },
      borderRadius: function () {
        return ["50%", anime.random(10, 35) + "%"];
      },
      duration: function () {
        return anime.random(1200, 1800);
      },
      delay: function () {
        return anime.random(0, 400);
      },
      direction: "alternate",
      loop: true,
    });
    return () => {
      animation.current = null;
    };
  });

  return (
    <div className={Styles.basics}>
      <div className={`${Styles.block} block`} data-x="200"></div>
      {/* <div className={`${Styles.block} block2`}></div> */}
      <div className={`${Styles.block} block`} data-x="75"></div>
      {/* <div className={`${Styles.block} block2`}></div> */}
      <div className={`${Styles.block} block`} data-x="300"></div>
      {/* <div className={`${Styles.block} block2`}></div> */}
      {/* <button onClick={handleAnimation}>Stop/Play</button> */}
    </div>
  );
};

export default Basics;
