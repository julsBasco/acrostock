import React from "react";
import { Container } from "react-bootstrap";
import CategoryWrapper from "./component/CategoryWrapper";
import DateDisplay from "./component/DateDisplay";

const Dashboard = () => {
  return (
    <div className="">
      <Container>
        <DateDisplay />
        <CategoryWrapper />
      </Container>
    </div>
  );
};

export default Dashboard;
