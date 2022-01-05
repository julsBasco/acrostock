import React, { useRef, useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import { useAuth } from "./contexts/AuthContext";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [generatedData, setGeneratedData] = useState([]);
  const { newUser, login, logout, currentUser, getData } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await newUser(emailRef.current.value, passwordRef.current.value);
    } catch {
      console.error("something weird happened");
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
    } catch {
      console.error("login error");
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logout();
      setLoading(false);
    } catch {
      console.error("logout failed");
    }
  };

  const generateData = async () => {
    try {
      const myData = await getData();
      setGeneratedData(myData);
      console.log(myData.ulam);
    } catch {
      console.log("fetch data failed");
    }
  };
  useEffect(() => {
    generateData();
  }, []);
  return (
    <div>
      <Navigation />
      <h1>create new user</h1>
      <form onSubmit={submitHandler}>
        <input
          ref={emailRef}
          type="text"
          placeholder="enter your email addresss"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="enter your password"
        />
        <button type="submit" disabled={loading}>
          create new user
        </button>
      </form>
      <br />
      <h1>login user</h1>
      {currentUser ? (
        <div>
          <h3>Welcome friend {currentUser.email}</h3>
          <button onClick={handleLogout} disabled={loading}>
            sign me out
          </button>
          <button onClick={generateData} disabled={loading}>
            generate my data to console
          </button>
        </div>
      ) : (
        <form onSubmit={loginHandler}>
          <input
            ref={loginEmailRef}
            type="text"
            placeholder="enter your email addresss"
          />
          <input
            ref={loginPasswordRef}
            type="password"
            placeholder="enter your password"
          />
          <button type="submit">login</button>
        </form>
      )}
    </div>
  );
};

export default App;
