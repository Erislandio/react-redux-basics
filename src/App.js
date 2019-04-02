import React, { Component } from "react";

import { Provider } from "react-redux";

import Sidebar from "./components/sidebar/Sidebar";
import Video from "./components/video/Index";
import store from "./store/index";

class App extends Component {
  render() {
    console.log(this);
    return (
      <Provider store={store}>
        <Sidebar />
        <Video />
      </Provider>
    );
  }
}

export default App;
