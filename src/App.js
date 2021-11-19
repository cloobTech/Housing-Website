import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import ShowCase from "./component/ShowCase";
import Header from "./layout/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WatchList from "./pages/Watch_List";
import { data } from "./component/data";

const App = () => {
  const [showCaseData, setShowCaseData] = useState(data);
  const [filterShowCaseData, setFilterShowcaseData] = useState([]);

  const ShowCaseHandler = (id) => {
    setFilterShowcaseData(
      [...showCaseData].filter((eachData) => id === eachData.id)
    );
  };

  useEffect(() => {
    ShowCaseHandler();
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div>
      <Header></Header>

      <Switch>
        <Route path="/" exact>
          <Home ShowCaseHandler={ShowCaseHandler}></Home>
        </Route>
        <Route path="/services">
          <ShowCase filterShowCaseData={filterShowCaseData}></ShowCase>
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
