# Hacker News Reader

The project is a webapp fetching users who have forked the [react repository](https://github.com/facebook/react/). The authenticated user can follow or unfollow the user they are interested in. For authentication and other details, [Github API Docs](https://docs.github.com/en/rest/reference/users#get-the-authenticated-user) provide a detailed documentation.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development server

To authenticate yourself, add following content to your config.js
`export const GITHUB_TOKEN = <token>;`
`export const GITHUB_USERNAME = <github_username>;`

To run the project on localhost :

- Run `npm install` to install the dependencies.
- Run `npm start` for a dev server.
- Navigate to `http://localhost:3000/`.

The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `build/` directory.

## Built With

- [React](https://reactjs.org/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Material UI](https://material-ui.com/)
- [Github API](https://docs.github.com/en/rest)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
