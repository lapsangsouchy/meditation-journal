import React, { useContext, useEffect } from "react";
import Entries from "../entries/Entries";
import EntryForm from "../entries/EntryForm";
import EntryFilter from "../entries/EntryFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div>
        <a
          href="#entry-form-modal"
          className="btn btn-primary btn-block modal-trigger"
        >
          Create Journal Entry
        </a>
        <EntryForm />
        <EntryFilter />
        <Entries />
      </div>
    </div>
  );
};

export default Home;
