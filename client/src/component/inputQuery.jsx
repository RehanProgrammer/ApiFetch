import React, { Component } from "react";
import axios from "axios";

class InputQuery extends Component {
  constructor(props) {
    super(props);
    this.state = { brewer: "" };
  }

  handleNameChange = event => {
    this.setState({ brewer: event.target.value });
  };

  handleSubmit = event => {
    //console.log(this.state.brewer);
    event.preventDefault();
    //console.log(this.state);
    axios
      .get("/api", {
        params: {
          brewer: this.state.brewer
        }
      })
      .then(res => {
        this.props.fetchBrewer(res.data[0]);
      })
      .catch(e => {
        console.error(e);
      });
  };
  render() {
    return (
      <React.Fragment>
        <h5>
          Hello Chris, by the time I had this question it was already after 5,
          so I went with the name of brewer as input field. Please enter the
          right name of the company to see the results. No error handling has
          been implemented. For example please enter "Almanac Beer Company" as
          input field. For more names please visit the api website you provided me in the email.
        </h5>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              //value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default InputQuery;
