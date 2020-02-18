import React from "react";
import ReactDOM from "react-dom";
import Menu from "./layout/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "../store";
import { Provider } from "react-redux";
import Links from "./links/Links";
import CreateLink from "./Links/CreateLink";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="main">
            <Menu />

            <div id="content">
              <Switch>
                <Route path="/links">
                  <Links></Links>
                </Route>
                <Route path="/">
                  <CreateLink></CreateLink>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
