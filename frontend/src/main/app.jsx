import React from "react";

import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";

import Routes from "./routes";
import "../template/custom.css";
import Menu from "../template/menu";

export default (props) => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
);
