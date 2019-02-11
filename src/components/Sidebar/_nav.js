export default {
  items: [
    {
      name: "Panel de Control",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: ""
      }
    },
    {
      title: true,
      name: "Catalogos",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Usuarios",
      url: "/usuarios",
      icon: "icon-people"
    },
    {
      name: "Giros",
      url: "/grios",
      icon: "icon-people"
    },
    {
      name: "Formas Juridicas",
      url: "/juridicas",
      icon: "icon-people"
    },
    {
      name: "Grados",
      url: "/grados",
      icon: "icon-people"
    },
    {
      name: "Ambito Estatal",
      url: "/ambitos",
      icon: "icon-drop"
    },
    {
      name: "Impuestos",
      url: "/impuestos",
      icon: "fa-money fa"
    },
    {
      name: "Contabilidad",
      url: "/contabilidad",
      icon: "icon-drop"
    },
    {
      name: `Tendencias Financieras`,
      url: "/tendencias",
      icon: "fa fa-line-chart"
    },
    {
      name: `Tipo de Comercialización`,
      url: "/comercializacion",
      icon: "fa fa-tags"
    },
    {
      name: "Departamentos",
      url: "/departamentos",
      icon: "icon-drop"
    },
    {
      name: "Empresas",
      url: "/empresas",
      icon: "fa fa-suitcase"
    }
  ]
};
