import React, { Component } from "react";
import Search from "./pages/Search";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Search />
      </div>
    );
  }
}

export default App;
