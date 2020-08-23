import axios from "axios";
import { REACT_REPO_URL, URL, FOLLOWING_URL } from "../shared/constants";
import { GITHUB_TOKEN, GITHUB_USERNAME } from "../shared/config";

//API call to fetch all the users who forked react repository
export const sendApiRequest = () => {
  return axios.get(REACT_REPO_URL).then((response) => response.data);
};

//API call to fetch all the users being followed
export const sendFollowingUsersRequest = () => {
  return axios
    .get(`${FOLLOWING_URL}${GITHUB_USERNAME}/following`)
    .then((response) => response);
};

//API call to Follow target user
export const sendFollowUserRequest = (user) => {
  return axios
    .put(`${URL}${user}`, null, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: `application/vnd.github.v3+json`,
      },
    })
    .then((data) => data.status);
};

//API call to Unfollow target user
export const sendUnFollowUserRequest = (user) => {
  return axios
    .delete(`${URL}${user}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: `application/vnd.github.v3+json`,
      },
    })
    .then((data) => data.status);
};
