import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    //always use super
    super(props);

    this.state = {
      username: "",
    };

    //creating variables using react
  }

  onChangeUsername = (e) => {
    //set value of username to value typed into text box
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = (e) => {
    //stop page from resetting to default
    e.preventDefault();

    const user = {
      //sets all values when submitted
      username: this.state.username,
    };
    console.log(user);
    axios.post("/users/add", user).then((res) => console.log(res.data));

    //set back to blank after user is created
    this.setState({
      username: "",
    });
  };

  render() {
    return (
      <div className="container-md">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Create User</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User!"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
