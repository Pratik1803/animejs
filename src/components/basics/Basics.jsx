import React, { useState, useEffect, useRef } from "react";
import Styles from "../../styles/basic/basic.module.scss";
import anime from "animejs";

const Basics = () => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current = anime({
      targets: ".block",
      translateX: 250,
      duration: 3000,
      endDelay: 1000,
      delay: 1000,
      loop: true,
      direction: "alternate",
      easing: "easeInOutExpo",
    });
  });

  return (
    <div className={Styles.basics}>
      <div className={`${Styles.block} block`}></div>
    </div>
  );
};

export default Basics;
