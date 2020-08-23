import React from "react";
import "./App.css";

import HomeContainer from "./containers/HomeContainer";
import AppBarComponent from "./components/AppBarComponent";

function App() {
  return (
    <>
      <AppBarComponent />
      <HomeContainer />
    </>
  );
}

export default App;
