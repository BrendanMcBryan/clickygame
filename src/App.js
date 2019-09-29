import React, { Component } from "react";
// import logo from "./logo.svg";
import SignCard from "./components/SignCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import signs from "./signs.json";
import Board from "./components/Board";

class App extends Component {
  state = {
    signs
  };
  handleGuess = id => {
    const signs = this.state.signs.filter(sign => sign.id !== id);
    this.setState({ signs });
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky the Guessing Game</Title>
        <Board>
          {this.state.signs.map(sign => (
            <SignCard
              handleGuess={this.handleGuess}
              id={sign.id}
              key={sign.id}
              sign={sign.sign}
              image={sign.svg}
              unicode={sign.unicode_symbol}
            />
          ))}
        </Board>
      </Wrapper>
    );
  }
}
export default App;
