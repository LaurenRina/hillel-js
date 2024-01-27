import React from "react";
import ListItem from "./ListItem";

const List = ({ list = [] }) => {
  return (
    <ul>
      {list?.map((item, index) => (
        <ListItem key={index} text={item.text} />
      ))}
    </ul>
  );
};

export default List;
