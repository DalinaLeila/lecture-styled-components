import Img from "./styled-components/Img";

import React, { Component } from "react";

export default class MyComponent extends Component {
  state = {
    imageURL: "https://source.unsplash.com/weekly?water"
  };

  render() {
    return (
      <div>
        <Img
          mainSrc={this.state.imageURL}
          dynamicSrc={"https://source.unsplash.com/random"}
        />
      </div>
    );
  }
}
