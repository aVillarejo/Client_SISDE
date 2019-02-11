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
  const { total } = props;
  return (
    <Row>
      <Col sm="3">
        <CardTitle className="mb-0">Listado de Giros</CardTitle>
        <div className="small text-muted">Total: {total} </div>
      </Col>
      <Col sm="9" className="d-none d-sm-inline-block">
        <Button color="primary" className="float-right">
          <i className="icon-plus" />
        </Button>

        <ButtonToolbar
          className="float-right"
          aria-label="Toolbar with button groups"
        >
          <ButtonGroup className="mr-3" aria-label="First group">
            <Button
              color="outline-secondary"
              onClick={() => props.onRadioBtnClick(1, 10)}
              active={props.active.radioSelected === 1}
            >
              10
            </Button>
            <Button
              color="outline-secondary"
              onClick={() => props.onRadioBtnClick(2, 20)}
              active={props.active.radioSelected === 2}
            >
              20
            </Button>
            <Button
              color="outline-secondary"
              onClick={() => props.onRadioBtnClick(3, 30)}
              active={props.active.radioSelected === 3}
            >
              30
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Col>
    </Row>
  );
};

export default Toolbar;
