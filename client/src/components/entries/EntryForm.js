import React, { useState, useContext, useEffect } from "react";
import EntryContext from "../../context/entry/entryContext";
import M from "materialize-css/dist/js/materialize.min.js";

const EntryForm = () => {
  const entryContext = useContext(EntryContext);

  const { addEntry, updateEntry, clearCurrent, current } = entryContext;

  var effectiveRange = document.querySelectorAll("input[type=range]");
  M.Range.init(effectiveRange);

  useEffect(() => {
    if (current !== null) {
      setEntry(current);
    } else {
      setEntry({
        log: "",
        effective: "",
        question: "",
      });
    }
  }, [entryContext, current]);

  const [entry, setEntry] = useState({
    log: "",
    effective: "",
    question: "",
  });

  const { log, effective, question } = entry;

  const onChange = (e) =>
    setEntry({ ...entry, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (log === "" || effective === "") {
      M.toast({ html: "Please enter these! They're useful 💚" });
    }
    if (current === null) {
      addEntry(entry);
    } else {
      updateEntry(entry);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };
  return (
    <div id="entry-form-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <form onSubmit={onSubmit}>
          <h2 className="text-primary">
            {current ? "Edit Entry" : "Add Entry"}
          </h2>
          <div className="input-field">
            <textarea
              type="text"
              className="materialize-textarea"
              name="log"
              value={log}
              onChange={onChange}
            />
            <label htmlFor="log">How was your meditation?</label>
          </div>
          <p>
            On a scale from 1 to 10 how <strong>Effective</strong> was it?
          </p>
          <p className="range-field">
            <input
              type="range"
              name="effective"
              id="effective-range"
              min="0"
              max="10"
              value={effective}
              onChange={onChange}
            />
          </p>
          <input
            type="text"
            placeholder="What questions do you have? (optional)"
            name="question"
            value={question}
            onChange={onChange}
          />
          <div className="modal-footer">
            <a
              onClick={onSubmit}
              href="#!"
              className="modal-close btn btn-primary btn-block"
            >
              {current ? "Update Entry" : "Add Entry"}{" "}
            </a>
            {current && (
              <a
                href="#!"
                className="modal-close btn btn-light btn-block"
                onClick={clearAll}
              >
                Clear
              </a>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default EntryForm;
