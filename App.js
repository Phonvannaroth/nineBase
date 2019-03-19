import React, { Component } from "react";
import { Provider } from "mobx-react";
import Route from "./app/routes";
import APP_STORE from "./app/store";
export default class App extends Component {
  render() {
    return (
      <Provider {...APP_STORE}>
        <Route />
      </Provider>
    );
  }
}
