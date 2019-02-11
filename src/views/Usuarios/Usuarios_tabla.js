import React, { Component } from "react";
import { Card, CardBody, Col, Row, Table, Badge } from "reactstrap";

function UserRow(props) {
  const user = props.user;
  const userLink = `#/users/${user.id}`;
  return (
    <tr key={user.id.toString()}>
      <td className="d-none d-md-table-cell ">
        <a style={{ textDecoration: "none", color: "black" }} href={userLink}>
          {user.nombre}
        </a>
      </td>
      <td>
        <a style={{ textDecoration: "none", color: "black" }} href={userLink}>
          {user.usuario}
        </a>
      </td>
      <td className="d-none d-md-table-cell">{user.password}</td>
      <td className="d-none d-md-table-cell">{user.tipo}</td>
      <td>
        {user.status ? (
          <Badge color="success">Activo</Badge>
        ) : (
          <Badge color="secondary">Inactivo</Badge>
        )}
      </td>

      <td className="table-cell" style={{display:"flex"}}>
        <a
          className="btn btn-primary"
          style={{ textDecoration: "none", color: "white" }}
          href={userLink}
        >
          <i className="fa fa-pencil-square-o fa-lg" />
        </a>

        <a
          className="btn btn-danger ml-2"
          style={{ textDecoration: "none", color: "white" }}
          href={userLink}
        >
          <i className="fa fa-trash fa-lg " />
        </a>
      </td>
    </tr>
  );
}
const TablaUsuarios = props => {
  return (
    <div className="table-responsive-lg">
      <Table striped hover style={{ height: 300, marginTop: 40 }} xs="12">
        <thead>
          <tr>
            <th className="d-flex d-none d-md-table-cell text-center">Nombre</th>
            <th>Usuario</th>
            <th className="d-none d-md-table-cell">Contraseña</th>
            <th className="d-none d-md-table-cell">Tipo</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.userList.map((user, index) => (
            <UserRow key={index} user={user} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaUsuarios;
