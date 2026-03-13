import React from "react";
import styles from "./main-background.module.css";
import graphic01 from "../../assets/background/graphic01.svg";
import graphic02 from "../../assets/background/graphic02.svg";
import graphic03 from "../../assets/background/graphic03.svg";
import graphic04 from "../../assets/background/graphic04.svg";
import graphic05 from "../../assets/background/graphic05.svg";
import graphic06 from "../../assets/background/graphic06.svg";
import graphic07 from "../../assets/background/graphic07.svg";
import graphic08 from "../../assets/background/graphic08.svg";

const Graphics = [
  { graphic: graphic01, className: styles.icon01 },
  { graphic: graphic02, className: styles.icon02 },
  { graphic: graphic03, className: styles.icon03 },
  { graphic: graphic04, className: styles.icon04 },
  { graphic: graphic05, className: styles.icon05 },
  { graphic: graphic06, className: styles.icon06 },
  { graphic: graphic07, className: styles.icon07 },
  { graphic: graphic08, className: styles.icon08 },
];

export const MainBackground: React.FC = () => {
  return (
    <div className={styles.background} aria-hidden="true">
      {Graphics.map(({ graphic, className }) => (
        <img className={`${styles.icon} ${className}`} src={graphic} alt="" />
      ))}
    </div>
  );
};
