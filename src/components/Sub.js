import React from "react";

const Sub = (props) => {
  console.log(props);
  return (
    <div>
      <p style={{ backgroundColor: props.color }}>this is the Sub</p>
      <button
        onClick={() => {
          props.colorAction("green");
        }}
      >
        Sub
      </button>
    </div>
  );
};
export default Sub;
