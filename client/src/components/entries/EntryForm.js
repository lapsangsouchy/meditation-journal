import React, { useState, useContext, useEffect } from "react";
import EntryContext from "../../context/entry/entryContext";

const EntryForm = () => {
  const entryContext = useContext(EntryContext);

  const { addEntry, updateEntry, clearCurrent, current } = entryContext;

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
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? "Edit Entry" : "Add Entry"}</h2>
      <textarea type="text" name="log" value={log} onChange={onChange} />
      <h3>How effective was it?</h3>
      <p>1 being not effective - 10 being very effective</p>
      <input
        type="radio"
        name="effective"
        value="1"
        checked={effective === "1"}
        onChange={onChange}
      />{" "}
      1{" "}
      <input
        type="radio"
        name="effective"
        value="2"
        checked={effective === "2"}
        onChange={onChange}
      />
      2{" "}
      <input
        type="radio"
        name="effective"
        value="3"
        checked={effective === "3"}
        onChange={onChange}
      />
      3{" "}
      <input
        type="radio"
        name="effective"
        value="4"
        checked={effective === "4"}
        onChange={onChange}
      />
      4{" "}
      <input
        type="radio"
        name="effective"
        value="5"
        checked={effective === "5"}
        onChange={onChange}
      />{" "}
      5{" "}
      <input
        type="radio"
        name="effective"
        value="6"
        checked={effective === "6"}
        onChange={onChange}
      />
      6{" "}
      <input
        type="radio"
        name="effective"
        value="7"
        checked={effective === "7"}
        onChange={onChange}
      />
      7{" "}
      <input
        type="radio"
        name="effective"
        value="8"
        checked={effective === "8"}
        onChange={onChange}
      />
      8{" "}
      <input
        type="radio"
        name="effective"
        value="9"
        checked={effective === "9"}
        onChange={onChange}
      />
      9{" "}
      <input
        type="radio"
        name="effective"
        value="10"
        checked={effective === "10"}
        onChange={onChange}
      />{" "}
      10{" "}
      <input
        type="text"
        placeholder="What questions do you have? (optional)"
        name="question"
        value={question}
        onChange={onChange}
      />
      <div>
        <input
          type="submit"
          value={current ? "Update Entry" : "Add Entry"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default EntryForm;
