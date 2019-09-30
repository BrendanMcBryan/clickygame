import React, { Component } from "react";
// import logo from "./logo.svg";
import SignCard from "./components/SignCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Board from "./components/Board";
import signs from "./signs.json";

class App extends Component {
  state = {
    signs,
    score: 0,
    topScore: 0,
    message: "Welcome! Click to start!"
  };

  componentDidMount() {
    // this.shuffleSigns(this.state.signs);
  }
  /**
   * Randomly shuffle an array
   * https://stackoverflow.com/a/2450976/1293256
   */

  shuffleSigns = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;

    // var currentIndex = array.length;
    // var temporaryValue, randomIndex;

    // // While there remain elements to shuffle...
    // while (0 !== currentIndex) {
    //   // Pick a remaining element...
    //   randomIndex = Math.floor(Math.random() * currentIndex);
    //   currentIndex -= 1;

    //   // And swap it with the current element.
    //   temporaryValue = array[currentIndex];
    //   array[currentIndex] = array[randomIndex];
    //   array[randomIndex] = temporaryValue;
    // }
    // // this.setState({ signs: array });
    // return array;
  };

  handleGuess = id => {
    const newSign = this.state.signs[id - 1];
    console.log(
      `you clicked on ID = ${id}, ${newSign.sign}, the picked is ${newSign.picked} and whos ID is ${newSign.id}`
    );

    switch (newSign.picked) {
      case true:
        // signs = require("./signs.json");

        this.setState({ score: 0, message: "Bad Pick!, game over" });

        console.log("Already Picked!");
        signs.forEach(element => {
          element.picked = false;
        });
        this.setState({ signs });

        break;
      case false:
        this.setState({ message: "Good Pick!" });
        newSign.picked = true;

        let newScore = this.state.score + 1;
        // increase Topscore if need be
        if (newScore > this.state.topScore) {
          this.setState({ topScore: newScore });
        }
        this.setState({ score: newScore });
        // this.setState({ signs });
        break;
      default:
      // code block
    }

    this.setState({ signs });
    // this.shuffleSigns(signs);
  };

  render() {
    return (
      <Wrapper>
        <Title
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        ></Title>
        <Board className="container">
          {this.state.signs.map(sign => (
            <SignCard
              handleGuess={this.handleGuess}
              id={sign.id}
              key={sign.id}
              sign={sign.sign}
              image={sign.svg}
              unicode={sign.unicode_symbol}
              picked={sign.picked}
            />
          ))}
        </Board>
      </Wrapper>
    );
  }
}
export default App;
