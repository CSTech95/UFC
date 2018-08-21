import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Sample from "./Sample";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v1/us/fighters`
      )
      .then(res => {
        const persons = res.data;
        // console.log(persons);
        this.setState({ persons: persons });
        console.log(this.state.persons);
      });
  }
  render() {
    return (
      <ul>
        {this.state.persons.map(x => (
          <Sample fName={x.first_name} lName={x.last_name} pic={x.thumbnail} />
        ))}
      </ul>
    );
  }
}

export default App;
