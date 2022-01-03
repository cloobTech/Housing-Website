/** @format */

import React, { useState } from "react";
import { Route, Switch } from "react-router";
import ShowCase from "./component/ShowCase";
import Header from "./layout/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WatchList from "./pages/Watch_List";
import { data } from "./component/data";
import Loading from "./pages/Loading";
import Error from "./pages/Error";
import Services from "./pages/Services";

const App = () => {
  const [showCaseData, setShowCaseData] = useState(data);
  const [filterShowCaseData, setFilterShowCaseData] = useState([]);

  const ShowCaseHandler = (id) => {
    const filter = [...showCaseData].filter((eachData) => id === eachData.id);

    localStorage.setItem("item", JSON.stringify(filter));
  };

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Home ShowCaseHandler={ShowCaseHandler}></Home>
        </Route>
        <Route path="/showcase">
          <ShowCase
            filterShowCaseData={filterShowCaseData}
            setShowCaseData={setShowCaseData}
            setFilterShowCaseData={setFilterShowCaseData}
            showCaseData={showCaseData}
          ></ShowCase>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/watch_list">
          <WatchList></WatchList>
        </Route>
        <Route path="/error" exact>
          <Error></Error>
        </Route>
        <Route>
          <Loading></Loading>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
