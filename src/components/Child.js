import React, { useContext } from "react";
import { AppContext } from "../context/Context";

const Child = () => {
  const { toggle, setToggle } = useContext(AppContext);
  const value = toggle.toString();

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setToggle(!toggle)}>Change state</button>
    </div>
  )
}

export default Child