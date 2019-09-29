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
    this.shuffleState(this.state.signs);
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
    const signs = this.state.signs.filter(sign => sign.id !== id);
    let newScore = this.state.score + 1;
    this.setState({ signs, score: newScore });
    this.shuffleState(signs);

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
