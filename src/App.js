import React, { Component } from "react";
import "./App.css";
import Pokecard from "./components/Pokecard.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Pokecard id={4} name="Charmander" type="fire" exp={62} /> */}
        <Pokecard />
      </div>
    );
  }
}
export default App;
