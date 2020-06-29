import React, { useContext, useEffect } from "react";
import Entries from "../entries/Entries";
import EntryForm from "../entries/EntryForm";
import EntryFilter from "../entries/EntryFilter";
import AuthContext from "../../context/auth/authContext";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
  });

  return (
    <div className="container">
      <EntryForm />
      <EntryFilter />
      <Entries />
    </div>
  );
};

export default Home;
