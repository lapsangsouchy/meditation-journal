import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import EntryItem from "./EntryItem";
import Spinner from "../layout/Spinner";
import EntryContext from "../../context/entry/entryContext";

const Entries = () => {
  const entryContext = useContext(EntryContext);

  const { entries, filtered, getEntries, loading } = entryContext;

  useEffect(() => {
    getEntries();
    //eslint-disable-next-line
  }, []);

  if (entries !== null && entries.length === 0 && !loading) {
    return <h4>Welcome! Go ahead and add your first journal entry.</h4>;
  }

  return (
    <Fragment>
      {entries !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((entry) => (
                <CSSTransition key={entry._id} timeout={500} classNames="item">
                  <EntryItem key={entry.id} entry={entry} />
                </CSSTransition>
              ))
            : entries.map((entry) => (
                <CSSTransition key={entry._id} timeout={500} classNames="item">
                  <EntryItem entry={entry} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Entries;
