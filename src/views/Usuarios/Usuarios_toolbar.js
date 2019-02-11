import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  ButtonToolbar,
  ButtonGroup,
  CardTitle
} from "reactstrap";

const Toolbar = props => {
  return (
    <Row>
      <Col sm="3">
        <CardTitle className="mb-0">Listado de Usuarios</CardTitle>
        <div className="small text-muted">November 2015</div>
      </Col>
      <Col sm="9" className="d-none d-sm-inline-block">
        <Button color="primary" className="float-right">
          <i className="icon-cloud-download" />
        </Button>

        <ButtonToolbar
          className="float-right"
          aria-label="Toolbar with button groups"
        >
          <ButtonGroup className="mr-3" aria-label="First group">
            <Button
              color="outline-secondary"
              onClick={() => props.onRadioBtnClick(1)}
              active={props.active.radioSelected === 1}
            >
              10
            </Button>
            <Button
              color="outline-secondary"
              onClick={() => props.onRadioBtnClick(2)}
              active={props.active.radioSelected === 2}
            >
              15
            </Button>
            <Button
              color="outline-secondary"
              onClick={() => props.onRadioBtnClick(3)}
              active={props.active.radioSelected === 3}
            >
              25
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Col>
    </Row>
  );
};

export default Toolbar;
