import React from "react";
import { FirstName } from "./App";

const ComC = () => {
  return (
    <div>
      <FirstName.Consumer>
        {(fnmae) => {
          return <h1>My name is {fnmae} </h1>;
        }}
      </FirstName.Consumer>
     
    </div>
  );
};

export default ComC;
