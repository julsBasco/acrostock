import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import OnlineRegistration from "./pages/OnlineRegistration";
import Dashboard from "./pages/auth/Dashboard";
import CreateNew from "./pages/CreateNew";
import dashboardReducer from "./store/reducers/dashboardReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { RequireAuth } from "./component/privateRoute";

const store = createStore(dashboardReducer);

//STORE > GLOBALIZED STATE

//ACTION INCREMENT

//REDUCER

//DISPATCH

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <RequireAuth>
                <App />
              </RequireAuth>
            </AuthProvider>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          path="/login"
          element={
            <AuthProvider>
              <Login />
            </AuthProvider>
          }
        />

        <Route path="/create" element={<CreateNew />}>
          <Route path="/create" element={<CreateAccount />} />
          <Route path="info" element={<OnlineRegistration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
