import type React from "react";
import styles from "./game-card.module.css";
import type { Game } from "../../types/game";

type GameCardProps = {
  data: Game;
};

export const GameCard: React.FC<GameCardProps> = ({ data }) => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageBlock}>
          <img src={data.img} alt={data.title} loading="lazy" />
        </div>

        <h3>{data.title}</h3>
        <div className={styles.price}>
          <span className={styles.oldPrice}>{data.oldPrice} р.</span>
          <span className={styles.newPrice}>{data.price} р.</span>
        </div>
      </div>
    </article>
  );
};
