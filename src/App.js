import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      r: "235",
      g: "200",
      b: "165",
      a: "0.5"
    };

    this.handleR = this.handleR.bind(this);
    this.handleG = this.handleG.bind(this);
    this.handleB = this.handleB.bind(this);
    this.handleA = this.handleA.bind(this);
  }

  handleR(e) {
    this.setState({ r: e.target.value });
  }

  handleG(e) {
    this.setState({ g: e.target.value });
  }

  handleB(e) {
    this.setState({ b: e.target.value });
  }

  handleA(e) {
    this.setState({ a: e.target.value });
  }

  render() {
    return (
      <>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundImage:
              "linear-gradient" +
              "(" +
              "to right" +
              "," +
              "rgba(255, 0, 0, 0)" +
              "," +
              "rgba(" +
              this.state.r +
              "," +
              this.state.g +
              "," +
              this.state.b +
              "," +
              this.state.a +
              ")"
          }}
        />
        <div id="pickColor">
          <p>
            background-image: linear-gradient(to right, rgba(255, 0, 0, 0),
            rgba({this.state.r}, {this.state.g}, {this.state.b}, {this.state.a}
            ));
          </p>
          <input
            type="range"
            min="0"
            max="255"
            value={this.state.r}
            className="slider"
            onChange={this.handleR}
          />
          <input
            type="range"
            min="0"
            max="255"
            value={this.state.g}
            className="slider"
            onChange={this.handleG}
          />
          <input
            type="range"
            min="0"
            max="255"
            value={this.state.b}
            className="slider"
            onChange={this.handleB}
          />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={this.state.a}
            className="slider"
            onChange={this.handleA}
          />
        </div>
      </>
    );
  }
}

export default App;
