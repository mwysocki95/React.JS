import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import Auxiliary from "../../../hoc/Auxiliary";
import AuthContext from "../../../context/context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElement.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Auxiliary>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please Login</p>
        )}
        <p onClick={this.props.click}>
          I am {this.props.name} and i am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          key="i3"
          ref={inputEl => {
            this.inputElement = inputEl;
          }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(Person, classes.Person);
