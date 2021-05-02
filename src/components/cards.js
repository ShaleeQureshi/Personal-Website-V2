import React from "react";
import Card from "react-bootstrap/Card";

/* Props in this component 
- bg
- textColor
- styleCard
- header
- img
- title
- text
- optional
*/

const Cards = (props) => {
  return (
    <div>
      <Card
        bg={props.bg}
        text={props.textColor}
        style={{ width: props.styleCard }}
        className="mb-5 mt-5"
      >
        {props.header ? <Card.Header>{props.header}</Card.Header> : null}
        {props.img ? <Card.Img variant="top" src={props.img} /> : null}
        <Card.Body>
          <Card.Title> {props.title} </Card.Title>
          <Card.Text>{props.text}</Card.Text>
          {props.optional ? props.optional : null}
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
};
export default Cards;