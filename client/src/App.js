import React, { Component } from "react";

import InputQuery from "./component/inputQuery";
import DisplayQuery from "./component/displayBrewer";

import "./App.css";

class App extends Component {
  state = { brewer: [] };

  componentDidMount() {
    /*fetch('/api')
      .then(res => res.json())
  .then(brewer => this.setState({ brewer }));*/
    //this.getBrewer();
  }

  getBrewer = brewer => {
    console.log(brewer);
    let tempBrewer = [...this.state.brewer];
    console.log(tempBrewer);
    tempBrewer.push(brewer);
    console.log("tempBrewer: " + tempBrewer);
    //console.log(this.state.brewer);
    this.setState({ brewer: tempBrewer });
    //console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <InputQuery fetchBrewer={this.getBrewer}> </InputQuery>
        <DisplayQuery brewer={this.state.brewer} />
      </React.Fragment>
    );
  }
}

export default App;
