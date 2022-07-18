// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
      <React.Fragment>
        <a href="#" onClick={this.handleToggle}>
          Want to buy a new car?
        </a>
        {this.state.toggle && <p>Call +11 22 33 44 now!</p>}
      </React.Fragment>
    );
  }
}
