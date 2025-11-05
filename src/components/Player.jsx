import styled, { css } from "styled-components";
import { usePlayer } from "../contexts/usePlayer";

const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const H2 = styled.h2`
  margin-bottom: 2rem;
  ${(props) =>
    props.pNum === 1 &&
    css`
      color: red;
    `}
  ${(props) =>
    props.pNum === 2 &&
    css`
      color: blue;
    `}
`;
const Img = styled.img`
  max-width: 15rem;
  max-height: 24rem;
  margin-bottom: 4rem;
`;
const P = styled.p`
  font-size: 2rem;
`;
const Span = styled.span`
  font-weight: bold;
`;

function Player({ playerNum }) {
  const { card1, p1Score, card2, p2Score } = usePlayer();
  const card = playerNum === 1 ? card1 : card2;
  const score = playerNum === 1 ? p1Score : p2Score;

  return (
    <StyledPlayer>
      <H2 pNum={playerNum}>Player #{playerNum}</H2>
      <Img src={`${card}.jpg`} alt={card} />
      <P>
        Score: <Span>{score}</Span>
      </P>
    </StyledPlayer>
  );
}

export default Player;
