import React, { useContext } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import EntryContext from "../../context/entry/entryContext";

const EntryItem = ({ entry }) => {
  const entryContext = useContext(EntryContext);
  const { deleteEntry, setCurrent, clearCurrent } = entryContext;

  const { _id, date, log, effective, question } = entry;

  const onDelete = () => {
    deleteEntry(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        <Moment format="MMM Do YYYY, h:mm:ss a">{date}</Moment>{" "}
      </h3>{" "}
      <br />
      <p className="p-1">{log}</p>
      <ul className="list">
        <li>{effective}</li>
        {question && <li>{question}</li>}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(entry)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

EntryItem.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default EntryItem;
