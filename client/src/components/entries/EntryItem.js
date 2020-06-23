import React, { useContext } from "react";
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
      <h3 className="text-primary text-left">{date} </h3> <br />
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
