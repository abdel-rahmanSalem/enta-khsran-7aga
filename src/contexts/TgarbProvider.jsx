import { createContext } from "react";
import { useEffect, useState } from "react";

const TgarbContext = createContext();

function TgarbProvider({ children }) {
  const [tgarb, setTgarb] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("tgarb") === null) {
      console.log("not exist");
      localStorage.setItem("tgarb", JSON.stringify([]));
      console.log("init");
      return;
    } else {
      console.log("exist");
      setTgarb(JSON.parse(localStorage.getItem("tgarb")));
      console.log("parsed to state");
    }
  }, []);

  useEffect(() => {
    if (tgarb.length > 0) {
      console.log(tgarb);
      console.log("State is not embty");
      localStorage.setItem("tgarb", JSON.stringify(tgarb));
    } else {
      console.log("State is embty");
    }
  }, [tgarb]);
  return (
    <TgarbContext.Provider value={{ tgarb, setTgarb }}>
      {children}
    </TgarbContext.Provider>
  );
}

export { TgarbProvider, TgarbContext };
