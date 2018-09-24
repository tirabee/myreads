import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import MainPage from "./MainPage";
import Search from "./Search";

class BooksApp extends React.Component {


  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MainPage} />
        <Route path="/search" component={Search} />
      </div>
    );
  }
}

export default BooksApp;
