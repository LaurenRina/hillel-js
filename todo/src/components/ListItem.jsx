import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ListItem = ({ text }) => {
  return (
    <li>
      <span>{text}</span>
      <div className="controls">
        <button>
          <EditIcon />
        </button>
        <button>
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
