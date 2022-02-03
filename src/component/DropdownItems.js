import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const DropdownItems = (props) => {
  const [title, setTitle] = useState(null);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {title ? title : props.title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {props.item.map((items, index) => {
          return (
            <Dropdown.Item onClick={() => setTitle(items)}>
              {items}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownItems;
