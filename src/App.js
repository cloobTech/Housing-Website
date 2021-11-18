import React from "react";
import { Route, Switch } from "react-router";

import ShowCase from "./component/ShowCase";

import Header from "./layout/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WatchList from "./pages/Watch_List";

const App = () => {
  return (
    <div>
      <Header></Header>

      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/services">
          <ShowCase></ShowCase>
          {/* <Services></Services> */}
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/watch_list">
          <WatchList></WatchList>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
