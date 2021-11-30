import React, { Component } from "react";
import axios from "axios";

class CreateInterest extends Component {
  //always use constructor
  constructor(props) {
    //always use super
    super(props);
    //setting "this" to the proper variable
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onChangeFavSong = this.onChangeFavSong.bind(this);
    // this.onChangeFavColor = this.onChangeFavColor.bind(this);
    // this.onChangeFavFood = this.onChangeFavFood.bind(this);
    // this.onChangeFavNumber = this.onChangeFavNumber.bind(this);

    this.state = {
      username: "",
      favSong: "",
      favColor: "",
      favFood: "",
      favNumber: "",
      users: [],
    };

    //creating variables using react
  }

  componentDidMount() {
    axios.get("/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  onChangeUsername = (e) => {
    //set value of username to value typed into text box
    this.setState({
      username: e.target.value,
    });
  };
  onChangeFavSong = (e) => {
    this.setState({
      //set value of favSong to value typed into text box
      favSong: e.target.value,
    });
  };
  onChangeFavColor = (e) => {
    this.setState({
      //set value of favColor to value typed into text box
      favColor: e.target.value,
    });
  };
  onChangeFavFood = (e) => {
    this.setState({
      //set value of favFood to value typed into text box
      favFood: e.target.value,
    });
  };
  onChangeFavNumber = (e) => {
    this.setState({
      //set value of favNumber to value typed into text box
      favNumber: e.target.value,
    });
  };

  onSubmit = (e) => {
    //stop page from resetting to default
    e.preventDefault();

    const interest = {
      //sets all values when submitted
      username: this.state.username,
      favSong: this.state.favSong,
      favColor: this.state.favColor,
      favFood: this.state.favFood,
      favNumber: this.state.favNumber,
    };

    console.log(interest);

    axios.post("/interests/add", interest).then((res) => console.log(res.data));
    //once submitted go back home
    window.location = "/";
  };
  render() {
    return (
      <div className="container-md">
        <h3>Add New Interest Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Favorite Song</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.favSong}
              onChange={this.onChangeFavSong}
            />
          </div>
          <div className="form-group">
            <label>Favorite Color</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.favColor}
              onChange={this.onChangeFavColor}
            />
          </div>
          <div className="form-group">
            <label>Favorite Food</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.favFood}
              onChange={this.onChangeFavFood}
            />
          </div>
          <div className="form-group">
            <label>Favorite Number</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.favNumber}
              onChange={this.onChangeFavNumber}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Interest!"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default CreateInterest;
