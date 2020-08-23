import React, { Component } from "react";
import * as githubApi from "../services/github-service";
import CardComponent from "../components/CardComponent";
import "../App.css";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      following_users: [],
    };
  }

  componentDidMount() {
    //API call to fetch users who forked react repository
    githubApi.sendApiRequest().then((data) =>
      this.setState({
        users: data,
      })
    );

    //API call to fetch users being followed
    githubApi.sendFollowingUsersRequest().then((response) => {
      const users = response.data.map((user) => user.login);
      this.setState({
        following_users: users,
      });
    });
  }

  render() {
    const { users, following_users } = this.state;

    //Pass the text to be rendered in Button as props based on if it exists in the following_users
    return (
      <div className="home-container">
        {users.map((user, index) => {
          return following_users.indexOf(user.owner.login) >= 0 ? (
            <CardComponent key={index} user={user} text="UNFOLLOW" />
          ) : (
            <CardComponent key={index} user={user} text="FOLLOW" />
          );
        })}
      </div>
    );
  }
}

export default HomeContainer;
