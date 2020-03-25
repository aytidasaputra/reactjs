import React from "react";
import "./App.css";
import { Table } from "reactstrap";
import { Jumbotron, Container } from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const App = () => {
  const item = [
    { id: "1", name: "Milk" },
    { id: "2", name: "Matcha" },
    { id: "3", name: "Tea" },
    { id: "4", name: "Coffea" }
  ];

  const renderItems = (items, index) => {
    return (
      <tr>
        <td>{items.id}</td>
        <td>{items.name}</td>
      </tr>
    );
  };

  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody>{item.map(renderItems)}</tbody>
      </Table>
    </div>
  );
};

export default App;
