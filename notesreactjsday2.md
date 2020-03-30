componentDidUpdate(prevState){
	let value = this.state.value;
if(prevState.value !== value && value === this.props.min){
console.log('data hasbeen reset');
}



{this.state.value == this.props.min && <span>This is min value</span>



spread syntax



import React, { Component } from "react";
import "./App.css";
import { Container, Badge } from "reactstrap";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "didit"
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    let { name } = this.state;
    console.log(name + " 'data hasbeen submitted.'");
  };
  render() {
    return (
      <Container className="container-app">
        <div>
          <h1>
            Inventory <Badge color="secondary">FORM</Badge>
          </h1>
          <form onSubmit={this.onSubmit}>
            <label className="label-app">
              NAME:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </label>
            <input type="submit" value="submit" />
          </form>
        </div>
      </Container>
    );
  }
}

export default App;

// const names = ["Adit", "didit", "aditya"];
// function App() {
//   return (
//     <div>
//       {names.map((newName, index) => (
//         <Hello key={index} name={newName} />
//       ))}
//       <br></br>
//       <Counter min={0} max={60} />
//     </div>
//   );
// }

// export default App;




no link
import React, { Component } from "react";
import "./App.css";
import { Container, Badge, Table, Button } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Router>
          <div>
            <h1>
              Inventory <Badge color="secondary">APPS</Badge>
            </h1>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                className="items-app"
                path="/items"
                exact
                component={Items}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Container>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function Items() {
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
      <h2>Items</h2>
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
  );
}
function NotFound() {
  return <h2>NotFound</h2>;
}

export default App;




for items 


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
      <h2>Items</h2>
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
  );


import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

