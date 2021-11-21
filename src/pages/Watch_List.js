import React, { useState, useEffect } from "react";
import watchlist from "./watch_list.module.css";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";
import Table from "../component/Table";

const Watch_List = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://cloob-homes-default-rtdb.firebaseio.com/cloob-homes.json")
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

  console.log(watchList);

  return (
    <>
      {children}
      {watchList.map((eachData) => {
        if (eachData) {
          return <Table {...eachData}></Table>;
        } else if (!eachData) {
          return (
            <div className={watchlist.background}>
              <h1 className={watchlist.h1}>
                YOU HAVE NOTHING ADDED TO YOUR WATCH_LIST
              </h1>
            </div>
          );
        }
      })}
    </>
  );
};

export default Watch_List;
