import React, { useState } from "react";
import { Sub } from "./Sub";

export const Parent = () => {
  let [color, setColor] = useState("red");

  const changeColor = () => {
    setColor("pink");
  };

  return (
    <div>
      <button onClick={changeColor}>this is parent</button>
      <Sub color={color} colorAction={setColor} />
    </div>
  );
};
