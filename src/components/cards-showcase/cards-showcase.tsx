import React, { useState } from "react";
import styles from "./cards-showcase.module.css";
import type { Game } from "../../types/game";
import { GameCard } from "../game-card/game-card";

type CardsShowcase = {
  data: Game[];
};

export const CardsShowcase: React.FC<CardsShowcase> = ({ data }) => {
  const [isSelected, setIsSelected] = useState<Game | null>(null);

  const handlCardClick = (card: Game) => {
    setIsSelected(card);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Выбери игру для кастомизации</h2>
      <div className={styles.grid}>
        {data.map((card) => (
          <GameCard
            key={card.id}
            data={card}
            onSelect={() => handlCardClick(card)}
            className={isSelected?.id === card.id ? styles.selected : ""}
          />
        ))}
      </div>
    </section>
  );
};
