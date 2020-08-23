import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CardComponent = ({ user }) => {
  const classes = useStyles();
  const { owner, open_issues_count, forks_count, license } = user;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="280"
          image={owner.avatar_url}
          title="User avatar"
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
        <Button fullWidth color="primary">
          Follow
        </Button>
        <Button fullWidth color="primary">
          Github Profile
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
