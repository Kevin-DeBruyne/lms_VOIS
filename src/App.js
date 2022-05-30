import React, { Component } from "react";
import "./App.css";
import Pokedex from "./components/Pokedex.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Pokecard id={4} name="Charmander" type="fire" exp={62} /> */}
        <Pokedex />
      </div>
    );
  }
}
export default App;
