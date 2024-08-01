import { useContext } from "react";
import { TgarbContext } from "./TgarbProvider";

export default function useTgarb() {
  const context = useContext(TgarbContext);
  if (context === undefined)
    throw new Error("TgarbContext was used outside of the TgarbProvider");
  return context;
}
