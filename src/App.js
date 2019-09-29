import React, { Component } from "react";
// import logo from "./logo.svg";
import SignCard from "./components/SignCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import signs from "./signs.json";
import Board from "./components/Board";

class App extends Component {
  state = {
    signs,
    score: 0,
    topScore: 0,
    message: "Welcome! Click to start!"
  };

  componentDidMount() {
    // this.shuffleState(this.state.signs);
  }
  /**
   * Randomly shuffle an array
   * https://stackoverflow.com/a/2450976/1293256
   */

  shuffleState = array => {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({ signs: array });
  };

  handleGuess = id => {
    console.log(id);
    const newID = id - 1;
    const signs = this.state.signs;
    console.log(signs[newID]);

    switch (signs[newID].picked) {
      case true:
        // signs = require("./signs.json");

        this.setState({ signs, score: 0, message: "Bad Pick!, game over" });

        console.log("Already Picked!");

        //
        break;
      case false:
        this.setState({ message: "Good Pick!" });
        signs[newID].picked = true;
        let newScore = this.state.score + 1;
        // increase Topscore if need be
        if (newScore > this.state.topScore) {
          this.setState({ topScore: newScore });
        }
        this.setState({ score: newScore });
        break;
      default:
      // code block
    }
    // const signs = this.state.signs.filter(sign => sign.id !== id);

    this.setState({ signs });
    // this.shuffleState(signs);
  };

  render() {
    return (
      <Wrapper>
        <Title
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        ></Title>
        <div className="Container">
          <Board>
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
        </div>
      </Wrapper>
    );
  }
}
export default App;
