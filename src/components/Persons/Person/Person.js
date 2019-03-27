import React from "react";
import Style from "./Person.css";

const person = props => {
  console.log("[Person.js] rendering...");
  return (
    <div className={Style.Person}>
      <p onClick={props.click}>
        I am {props.name} and i am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
