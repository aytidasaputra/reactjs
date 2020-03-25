import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Table
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

class Profile extends React.Component {
  render() {
    const stock = [
      { id: "1", quantity: "40", item_id: "1", unit_id: "1" },
      { id: "2", quantity: "50", item_id: "2", unit_id: "2" },
      { id: "3", quantity: "60", item_id: "3", unit_id: "3" },
      { id: "4", quantity: "70", item_id: "4", unit_id: "4" }
    ];
    const renderStocks = stocks => {
      return (
        <tr>
          <td>{stocks.id}</td>
          <td>{stocks.quantity}</td>
          <td>{stocks.item_id}</td>
          <td>{stocks.unit_id}</td>
        </tr>
      );
    };
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Stocks</h3>
                </CardHeader>
                <CardBody>
                  <div>
                    <Table hover>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>QUANTITY</th>
                          <th>ITEM ID</th>
                          <th>UNIT ID</th>
                        </tr>
                      </thead>
                      <tbody>{stock.map(renderStocks)}</tbody>
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

export default Profile;
