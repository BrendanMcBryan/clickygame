// import dependencies

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

  // TODO check to see if i really need to use this Headers, seems like maybe not
  componentDidMount() {
    // this.shuffleSigns(this.state.signs);
  }

  // * This method, which took a lot of searching and finagling, is apparently called the "Durstenfeld shuffle algorithm" for shuffling an array, it was confirmed as 'how to do it' by Dan before class

  shuffleSigns = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  // * Here is where we handle guessee. It uses a switch system based on the "picked" boolean of the record chosen
  handleGuess = id => {
    const newSign = this.state.signs[id - 1];
    console.log(
      `you clicked on ID = ${id}, ${newSign.sign}, the picked is ${newSign.picked} and whos ID is ${newSign.id}`
    );

    switch (newSign.picked) {
      case true:
        // * User has lost, reset the score and let them know about it
        this.setState({ score: 0, message: "Bad Pick!, game over" });

        // TODO console.log("Already Picked!");

        // * Here we reset all the cards so that the "picked" in thier records are set back to "False"
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
        break;

      default:
        break;
    }

    // TODO console.log("signs suppsoeldy shiffled!");
    // * After all the above set the state of signs
    this.setState({ signs });
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
          {this.shuffleSigns(
            this.state.signs.map(sign => (
              <SignCard
                handleGuess={this.handleGuess}
                id={sign.id}
                key={sign.id}
                sign={sign.sign}
                image={sign.svg}
                unicode={sign.unicode_symbol}
                picked={sign.picked}
              />
            ))
          )}
        </Board>
      </Wrapper>
    );
  }
}
export default App;
