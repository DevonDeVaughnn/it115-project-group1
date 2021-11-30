import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Interest = (props) => (
  <tr>
    <td>{props.interest.username}</td>
    <td>{props.interest.favSong}</td>
    <td>{props.interest.favColor}</td>
    <td>{props.interest.favFood}</td>
    <td>{props.interest.favNumber}</td>
    <td>
      <Link to={"/edit/" + props.interest._id}>Edit</Link> |
      <button onClick={() => props.deleteInterest(props.interest._id)}>
        Delete
      </button>
    </td>
  </tr>
);

export default class InterestList extends Component {
  constructor(props) {
    super(props);

    this.state = { interests: [] };
  }

  componentDidMount() {
    axios.get("/interests/").then((response) => {
      this.setState({ interests: response.data });
    });
  }

  deleteInterest = (id) => {
    axios.delete("/interests/" + id).then((res) => console.log(res.data));
    this.setState({
      interests: this.state.interests.filter((el) => el._id !== id),
    });
  };

  interestList = () => {
    return this.state.interests.map((currentInterest) => {
      return (
        <Interest
          interest={currentInterest}
          deleteInterest={this.deleteInterest}
          key={currentInterest._id}
        />
      );
    });
  };
  render() {
    return (
      <div className="container-md">
        <h3>Interests</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Username</th>
              <th>Favorite Song</th>
              <th>Favorite Color</th>
              <th>Favorite Food</th>
              <th>Favorite Number</th>
            </tr>
          </thead>
          <tbody>{this.interestList()}</tbody>
        </table>
      </div>
    );
  }
}
