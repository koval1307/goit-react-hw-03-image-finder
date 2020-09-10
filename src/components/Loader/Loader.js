import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "./loader.module.css";
export class Spinner extends Component {
  //other logic
  render() {
    return (
      <Loader
        classname="loader"
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
      />
    );
  }
}
