import React from "react";

const Input = ({ value, setValue, addToList }) => {
  return (
    <input
      placeholder={"Write smth..."}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          addToList(e.target.value);
          setValue("");
        }
      }}
    />
  );
};

export default Input;
