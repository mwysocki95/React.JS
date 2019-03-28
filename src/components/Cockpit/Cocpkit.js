import React, { useEffect } from "react";

import Style from "./Cockpit.css";

const cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect]");
    //Http request
    /*const timer = */
    setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect]");
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  });

  const classes = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = Style.Red;
  }
  if (props.persons.length <= 2) {
    classes.push(Style.red); //classes = ['red']
  }
  if (props.persons.length <= 1) {
    classes.push(Style.bold); //classes = ['red','bold']
  }
  return (
    <div className={Style.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
