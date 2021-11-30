import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import InterestList from "./components/interest-list.component";
import EditList from "./components/edit-list.component";
import CreateInterest from "./components/create-interest.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={InterestList} />
        <Route path="/edit/:id" component={EditList} />
        <Route path="/create" component={CreateInterest} />
        <Route path="/user" component={CreateUser} />
      </div>
    </>
  );
}

export default App;
