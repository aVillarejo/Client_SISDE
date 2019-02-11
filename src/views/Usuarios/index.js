import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
} from "reactstrap";

import usersData from "./UsersData";
import TablaUsuarios from "./Usuarios_tabla";
import Toolbar from "./Usuarios_toolbar";
import Paginador from "./Usuarios_paginador";

class Usuarios extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      filter: {
        dropdownOpen: false,
        radioSelected: 1
      }
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.filter.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      filter:{
        radioSelected: radioSelected
      }
    });
  }
  render() {
    const userList = usersData;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12} xs={12}>
            <Card>
              <CardBody>
                <Toolbar
                toogle={this.toggle}
                onRadioBtnClick={this.onRadioBtnClick}
                active={this.state.filter}
                />
                <TablaUsuarios userList={userList} />
                <Paginador/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Usuarios;
