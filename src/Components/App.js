import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Menu from "../Screens/Menu";
import Profile from "../Screens/Profile";
import Hooks from "../Screens/Hooks"
import Navigations from "./Navigations";

import store from "../Public/Redux/store"

class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <Router>
            <Navigations />
            <Route path={"/menu"} component={Menu} />
            <Route path={"/profile"} component={Profile} />
            <Route path={"/hooks"} component={Hooks} />
          </Router>
        </Provider>
    );
  }
}

export default App;
