import React, { Component } from "react";

export default class ClickMe extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.props);
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

/**
 * sans bind => erreur
 */
