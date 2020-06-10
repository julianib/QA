import React, { Component } from "react";

import QuestionsPanel from "./components/QuestionsPanel";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="page-header">
            <h1>QA</h1>
          </div>
          <div className="jumbotron">
            <div className="row">
              <div className="col-lg-10 col-md-10">
                <form>
                  <input
                    type="text"
                    class="form-control"
                    name="question"
                    placeholder="Search questions..."
                  />
                </form>
              </div>
              <div className="col-lg-2 col-md-2 fill">
                <div className="btn btn-lg btn-primary">Search</div>
              </div>
            </div>
            <div className="row">
              <QuestionsPanel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
