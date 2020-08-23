import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";

import * as githubApi from "../services/github-service";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: "20px",
  },
});

const CardComponent = ({ user, text }) => {
  const classes = useStyles();

  //Hook to manage Button innerText
  const [innerText, setInnerText] = useState(text);
  const { owner, open_issues_count, forks_count, license } = user;

  const handleClick = async (event, user) => {
    if (event.target.innerText === "FOLLOW") {
      //API call to Follow target user
      const status = await githubApi.sendFollowUserRequest(user);
      if (status === 204) setInnerText("UNFOLLOW");
    } else {
      //API call to Unfollow target user
      const status = await githubApi.sendUnFollowUserRequest(user);
      if (status === 204) setInnerText("FOLLOW");
    }
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="User avatar"
          height="280"
          image={owner.avatar_url}
          title={owner.login}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {owner.login}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Open issues : {open_issues_count}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Forks : {forks_count}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            License : {license.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" onClick={(e) => handleClick(e, owner.login)}>
          {innerText}
        </Button>
        <Button color="primary">
          <Link href={owner.html_url} target="blank">
            Github Profile
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
