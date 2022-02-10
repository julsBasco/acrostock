import React from "react";
import { Card } from "react-bootstrap";

const CardPicture = (props) => {
  const { background, text, source, head, title, info } = props;
  return (
    <Card
      text={text}
      bg={background}
      style={{ width: "18rem" }}
      className="mb-2 text-center   "
    >
      <Card.Img src={source} />
      <Card.Header>{head}</Card.Header>
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <hr />
        <Card.Text>{info}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPicture;
