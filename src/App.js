import React from "react";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import OnlineRegistration from "./pages/OnlineRegistration";
import NavBar from "./component/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { toggleMeThis } from "./store/actions/dashboard";
import { Outlet } from "react-router-dom";

const App = () => {
  const testingLang = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(testingLang);
  return (
    <div>
      <NavBar />
      <button onClick={() => dispatch(toggleMeThis())}>click this</button>

      <Outlet />
    </div>
  );
};

export default App;
