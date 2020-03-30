React day 3


ROutes
const routes = [
  {
    path: "/",	
    component: Home
  },
  {
    path: "/items",
    component: Items
  },
  {
    path: "/units",
    component: Units
  },
  {
    path: "/transactions",
    component: Transactions
  },
  {
    path: "/stocks",
    component: Stocks
  }
];


Redirect
<Route path='/'>
<Redirect to='/items'>
<Route/>



import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";
import "./Header.css";
import Items from "../../scenes/item";

export default class SidebarExampleSidebar extends Component {
  state = { visible: false };

  handleSidebarHide = () => this.setState({ visible: false });
  handleSidebarToggle = () =>
    this.setState(prevState => ({ visible: !prevState.visible }));

  render() {
    const { visible } = this.state;
    return (
      <div>
        <div>
          <Button onClick={this.handleSidebarToggle}>Menu</Button>
        </div>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="folder open outline" />
              Items
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="folder open outline" />
              Units
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="folder open outline" />
              Transactions
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="folder open outline" />
              Stocks
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

<div class="ui inverted menu">
          <Link to="/" class="active red item">
            <i class="university icon"></i>
            Home
          </Link>
          <Link to="/items" class="orange item">
            Items
          </Link>
          <Link to="/units" class="yellow item">
            Units
          </Link>
          <Link to="/transactions" class="olive item">
            Transactions
          </Link>
          <Link to="/stocks" class="green item">
            Stocks
          </Link>
        </div>


conts styles = theme => ({
root: {
display: 'flex',
},
toolbar: theme.mixins.toolbar,
content: {
	flexGrow: 1,
	padding: theme.spacing(3),
}
})
