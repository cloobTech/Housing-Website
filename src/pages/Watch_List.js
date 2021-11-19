import React from "react";
import watchList from "./watch_list.module.css";

const Watch_List = ({ children }) => {
  return (
    <div className={watchList.background}>
      <h1 className={watchList.h1}>
        YOU HAVE NOTHING ADDED TO YOUR WATCH_LIST
      </h1>
    </div>
  );
};

export default Watch_List;
