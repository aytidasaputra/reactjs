import React from "react";
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Button
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class Icons extends React.Component {
  state = {};
  render() {
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
      <>
        <Header />
        <Container className=" mt--7" fluid>
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Items</h3>
                </CardHeader>
                <CardBody>
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
                    <hr></hr>
                    <Button outline color="info">
                      Reload
                    </Button>{" "}
                  </div>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Icons;
