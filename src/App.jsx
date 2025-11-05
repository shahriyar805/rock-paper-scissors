import Player from "./components/Player";
import styled from "styled-components";
import Buttons from "./components/Buttons";
import { PlayerProvider } from "./contexts/PlayerContext";

const StyledApp = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 0rem 5rem;
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
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
