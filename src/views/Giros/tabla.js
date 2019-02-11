import React, { Component } from "react";
import { Card, CardBody, Col, Row, Table, Badge } from "reactstrap";

function TableRow(props) {
  const item = props.item;
  const itemLink = `#/items/${item.id}`;
  return (
    <tr key={item.id.toString()}>
      {/* <td className="d-none d-md-table-cell ">
        <a style={{ textDecoration: "none", color: "black" }} href={itemLink}>
          {item.nombre}
        </a>
      </td> */}
      <td>
        <a style={{ textDecoration: "none", color: "black" }} href={itemLink}>
          {item.nombre}
        </a>
      </td>
      <td>
        <a style={{ textDecoration: "none", color: "black" }} href={itemLink}>
          {item.descripcion}
        </a>
      </td>
      {/* <td className="d-none d-md-table-cell">{item.password}</td>
      <td className="d-none d-md-table-cell">{item.tipo}</td> */}
      {/* <td>
        {item.status ? (
          <Badge color="success">Activo</Badge>
        ) : (
          <Badge color="secondary">Inactivo</Badge>
        )}
      </td> */}

      <td className="table-cell" style={{display:"flex"}}>
        <a
          className="btn btn-primary"
          style={{ textDecoration: "none", color: "white" }}
          href={itemLink}
        >
          <i className="fa fa-pencil-square-o fa-lg" />
        </a>

        <a
          className="btn btn-danger ml-2"
          style={{ textDecoration: "none", color: "white" }}
          href={itemLink}
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
            {/* <th className="d-none d-md-table-cell text-center">Nombre</th> */}
            <th>Nombre</th>
            <th>Descripcion</th>
            {/* <th className="d-none d-md-table-cell">Contraseña</th>
            <th className="d-none d-md-table-cell">Tipo</th> */}
            <th></th> 
          </tr>
        </thead>
        <tbody>
          {props.source.map((item, index) => (
            <TableRow key={index} item={item} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaUsuarios;
