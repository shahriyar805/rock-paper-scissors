import { useContext } from "react";
import { PlayerContext } from "./PlayerContext";

function usePlayer() {
  const contextValue = useContext(PlayerContext);

  if (contextValue === undefined)
    throw new Error("PlayerContext was used outside the PlayerProvider.");

  return contextValue;
}

export { usePlayer };
