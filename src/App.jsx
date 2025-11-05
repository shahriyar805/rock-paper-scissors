import Player from "./components/Player";
import styled from "styled-components";
import Buttons from "./components/Button";
import { PlayerProvider } from "./contexts/PlayerContext";
// import { usePlayer } from "./contexts/usePlayer";

const StyledApp = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 0rem 5rem;
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  // const { card1, p1Score, card2, p2Score } = usePlayer();

  return (
    <PlayerProvider>
      <StyledApp>
        <Player playerNum={1} />
        <Buttons />
        <Player playerNum={2} />
      </StyledApp>
    </PlayerProvider>
  );
}

export default App;
