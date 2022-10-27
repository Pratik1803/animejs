import React, { useState, useEffect, useRef } from "react";
import Styles from "../../styles/basic/basic.module.scss";
import anime from "animejs";

const Basics = () => {
  const [animationState, setAnimationState] = useState(false); //true means play
  const animation = useRef(null);
  const animation2 = useRef(null);

  const handleAnimation = () => {
    if (animationState) {
      animation.current.pause();
      animation2.current.pause();
    } else {
      animation.current.play();
      animation2.current.play();
    }
    setAnimationState((prev) => !prev);
  };

  useEffect(() => {
    animation.current = anime({
      targets: ".block",
      translateX: [0, 250],
      loop: true,
      easing: "easeInOutSine",
      autoplay: false,
    });
    animation2.current = anime({
      targets: ".block2",
      translateX: [0, 250],
      loop: true,
      direction: "reverse",
      easing: "easeInOutSine",
      autoplay: false,
    });
    return () => {
      animation.current = null;
      animation2.current = null;
    };
  });

  return (
    <div className={Styles.basics}>
      <div className={`${Styles.block} block`}></div>
      <div className={`${Styles.block} block2`}></div>
      <div className={`${Styles.block} block`}></div>
      <div className={`${Styles.block} block2`}></div>
      <div className={`${Styles.block} block`}></div>
      <div className={`${Styles.block} block2`}></div>
      <button onClick={handleAnimation}>Stop/Play</button>
    </div>
  );
};

export default Basics;
