import { useState } from "react";
import { createContext } from "react";

export let counterContext = createContext();

export default function counterContextProvider(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [counter, setCounter] = useState(0);

  function changeCounter() {
    setCounter(Math.random());
  }

  return (
    <counterContext.Provider value={{ counter, changeCounter }}>
      {props.children}
    </counterContext.Provider>
  );
}
