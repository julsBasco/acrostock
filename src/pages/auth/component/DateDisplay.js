import React from "react";
import { Card, Container } from "react-bootstrap";

const DateDisplay = () => {
  const date = new Date();
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <Card style={{ width: "15rem", height: "50px" }}>
      <div
        style={{ height: "100%" }}
        className="d-flex justify-content-center align-items-center"
      >
        <span className="material-icons">calendar_month</span>
        <span>|</span>
        <span>
          {" "}
          Today is{" "}
          {<span style={{ color: "red" }}> {day[date.getDay()]} </span>}{" "}
        </span>
      </div>
    </Card>
  );
};

export default DateDisplay;
