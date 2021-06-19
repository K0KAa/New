import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Component/Navbar/Navbar";
import TourList from "./Component/TourList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    );
  }
}

export default App;
