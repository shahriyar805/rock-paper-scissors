import styled, { css } from "styled-components";
import { usePlayer } from "../contexts/usePlayer";

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15rem;
  margin: 8rem 4rem 0rem 4rem;
  height: 100%;
`;
const Button = styled.button`
  padding: 2rem;
  font-size: 3rem;
  border-radius: 2rem;
  cursor: pointer;
  ${(props) =>
    props.type === "toggle" &&
    css`
      background-color: black;
      color: white;
    `}
  ${(props) =>
    props.type === "reset" &&
    css`
      background-color: orange;
      color: black;
    `}
`;

function Buttons() {
  const { randomizeAndScore, reset } = usePlayer();

  return (
    <StyledButtons>
      <Button type="toggle" onClick={randomizeAndScore}>
        TOGGLE
      </Button>
      <Button type="reset" onClick={reset}>
        RESET
      </Button>
    </StyledButtons>
  );
}

export default Buttons;
