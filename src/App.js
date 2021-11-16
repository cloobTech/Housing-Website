import React from "react";
import { Route, Switch } from "react-router";

import Card from "./component/Card";
import ShowCase from "./component/ShowCase";

import Header from "./layout/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
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
          <ShowCase
            title="Ochuko House"
            houseName="Ochuko House"
            address="- No 234, New-York Layout, USA."
            description="A Four bedroom, well furnished aprtment located at the heart of the land where dreams comes true. Surely a great vacation spot for massive family."
          ></ShowCase>
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
