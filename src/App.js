import React from "react";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import OnlineRegistration from "./pages/OnlineRegistration";
import NavBar from "./component/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { toggleMeThis } from "./store/actions/dashboard";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />

      <Outlet />
    </div>
  );
};

export default App;
