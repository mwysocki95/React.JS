import React, { useEffect, useRef } from "react";

import classes from "./Cockpit.css";
import AuthContext from "../../context/context";

const cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect]");
    //Http request
    /*const timer = */
    // setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);
    toggleBtnRef.current.click();
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

  const classesa = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    classesa.push(classes.red); //classes = ['red']
  }
  if (props.persons.length <= 1) {
    classesa.push(classes.bold); //classes = ['red','bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classesa.join(" ")}>This is really working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);
