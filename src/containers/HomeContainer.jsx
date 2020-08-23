import React, { Component } from "react";
import * as githubApi from "../services/github-service";
import CardComponent from "../components/CardComponent";
import "../App.css";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    githubApi.sendApiRequest().then((data) =>
      this.setState({
        users: data,
      })
    );
  }

  render() {
    const { users } = this.state;

    return (
      <div className="home-container">
        {users.map((user, index) => (
          <CardComponent key={index} user={user} />
        ))}
      </div>
    );
  }
}

export default HomeContainer;
