/** @format */

import React, { useState, useEffect } from "react";
import watchlist from "./watch_list.module.css";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";
import Table from "../component/Table";
import Row from "../component/Row";

const Watch_List = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://cloob-home-default-rtdb.firebaseio.com/cloob.json")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        const watchlists = [];
        for (let key in data) {
          const watchlistObj = { ...data[key] };
          watchlists.push(watchlistObj);
        }
        return setWatchList(watchlists);
      })
      .catch((err) => history.push("./error"));
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  } else {
    console.log("gotten data");
  }

  return (
    <div className={watchlist.container}>
      {children}
      <Table>
        {watchList.map((eachData) => {
          if (eachData) {
            return <Row key={eachData.id} {...eachData}></Row>;
          } else {
            return (
              <div className={watchlist.background}>
                <h1 className={watchlist.h1}>
                  YOU HAVE NOTHING ADDED TO YOUR WATCH_LIST
                </h1>
              </div>
            );
          }
        })}
      </Table>
    </div>
  );
};

export default Watch_List;
