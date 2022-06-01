import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = { color: props.color };
  }

  render() {
    return <div style={{ color: this.state.color }}>What color is me?</div>;
  }
}

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  handleclick() {
    this.setState({ color: "green" });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Child color={this.state.color} />
        <button onClick={this.handleclick}>Change color</button>
      </div>
    );
  }
}
export default Color;
