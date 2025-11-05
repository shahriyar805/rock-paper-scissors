import { createContext, useState } from "react";

const PlayerContext = createContext();

function PlayerProvider({ children }) {
  const [card1, setCard1] = useState("rock");
  const [p1Score, setP1Score] = useState(0);
  const [card2, setCard2] = useState("rock");
  const [p2Score, setP2Score] = useState(0);

  const randSwitch = function (randNum, cardNum) {
    switch (randNum) {
      case 0:
        if (cardNum === 1) setCard1("rock");
        else if (cardNum === 2) setCard2("rock");
        break;
      case 1:
        if (cardNum === 1) setCard1("paper");
        else if (cardNum === 2) setCard2("paper");
        break;
      case 2:
        if (cardNum === 1) setCard1("scissors");
        else if (cardNum === 2) setCard2("scissors");
        break;
      default:
        alert("Error generating random card.");
    }
  };
  const setScores = function (rand1, rand2) {
    if (rand1 === 0 && rand2 === 1) setP2Score((score) => score + 1);
    else if (rand1 === 0 && rand2 === 2) setP1Score((score) => score + 1);
    else if (rand1 === 1 && rand2 === 0) setP1Score((score) => score + 1);
    else if (rand1 === 1 && rand2 === 2) setP2Score((score) => score + 1);
    else if (rand1 === 2 && rand2 === 0) setP2Score((score) => score + 1);
    else if (rand1 === 2 && rand2 === 1) setP1Score((score) => score + 1);
  };
  const randomizeAndScore = function () {
    const rand1 = Math.floor(Math.random() * 3);
    const rand2 = Math.floor(Math.random() * 3);
    randSwitch(rand1, 1);
    randSwitch(rand2, 2);
    setScores(rand1, rand2);
  };
  const reset = function () {
    setP1Score(0);
    setCard1("rock");
    setP2Score(0);
    setCard2("rock");
  };

  return (
    <PlayerContext.Provider
      value={{ card1, p1Score, card2, p2Score, randomizeAndScore, reset }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export { PlayerProvider, PlayerContext };
