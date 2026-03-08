import "./App.css";
import { GameCard } from "./components/game-card/game-card";
import data from "./mock/data.json";

function App() {
  return (
    <GameCard
      id={data.id}
      img={data.img}
      title={data.title}
      price={data.price}
      oldPrice={data.oldPrice}
    />
  );
}

export default App;
