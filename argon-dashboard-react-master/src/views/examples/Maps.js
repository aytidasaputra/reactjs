/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create google maps
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

class Maps extends React.Component {
  render() {
    const unit = [
      { id: "1", name: "Milk" },
      { id: "2", name: "Matcha" },
      { id: "3", name: "Tea" },
      { id: "4", name: "Coffea" }
    ];
    const renderUnits = (units, index) => {
      return (
        <tr>
          <td>{units.id}</td>
          <td>{units.name}</td>
        </tr>
      );
    };
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Units</h3>
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
                      <tbody>{unit.map(renderUnits)}</tbody>
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

export default Maps;
