import React, { Component } from "react";

import QuestionsPanel from "./components/QuestionsPanel";
import QuestionAdd from "./components/QuestionAdd";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="page-header">
            <Navbar />
          </div>
          <div className="jumbotron">
            <div className="col-md-8">
              <QuestionsPanel showSearchBar={true} />
            </div>
            <div className="col-md-4">
              <QuestionAdd />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
