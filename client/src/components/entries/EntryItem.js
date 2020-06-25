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
    <div>
      <h5 className="text-primary text-left">
        <Moment format="MMM Do YYYY, h:mm:ss a">{date}</Moment>
      </h5>
      <p className="flow-text">{log}</p>
      <div className="row">
        <div className="col m8">
          <p>
            <span className="text-primary">Effectiveness </span>
            <span className="p-3">{effective}</span>
          </p>
          {question && (
            <p>
              <span className="text-primary">Questions</span>
              <span className="p-3">{question}</span>
            </p>
          )}
        </div>
        <div className="col m4">
          <br />
          <p>
            <a
              href="#entry-form-modal"
              className="modal-trigger"
              onClick={() => setCurrent(entry)}
            >
              <button className="btn btn btn-small">Edit</button>
            </a>
            <button className="btn btn-dark btn-small" onClick={onDelete}>
              Delete
            </button>
          </p>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

EntryItem.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default EntryItem;
