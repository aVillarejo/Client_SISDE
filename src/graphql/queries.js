import gql from "graphql-tag";

export const USUARIOS_QUERY = gql`
  query getUsuarios($limite: Int, $offset: Int) {
    list: getUsuarios(limite: $limite, offset: $offset) {
      id
      nombre
      usuario
      password
      status
      tipo
    }
    total: totalUsuarios
  }
`;

export const GIROS_QUERY = gql`
  query getGiros($limite: Int, $offset: Int) {
    list: getGiros(limite: $limite, offset: $offset) {
      id
      nombre
      descripcion
    }
    total: totalGiros
  }
`;
