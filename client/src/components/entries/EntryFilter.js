import React, { useContext, useRef, useEffect } from "react";
import EntryContext from "../../context/entry/entryContext";

const EntryFilter = () => {
  const entryContext = useContext(EntryContext);
  const text = useRef("");

  const { filterEntries, clearFilter, filtered } = entryContext;
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterEntries(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Search through your entries"
        onChange={onChange}
      />
    </form>
  );
};

export default EntryFilter;
