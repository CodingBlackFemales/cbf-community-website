import React, { Component } from "react";
import { SplitButton, Button } from "react-bootstrap";

class Theme extends Component {
  state = { theme: "Primary" };

  render() {
    const theme = this.state.theme;
    return (
      <div>
        {" "}
        Hello world
        <Button id="caret" color={theme}>
          {theme} Theme
        </Button>
      </div>
    );
  }
}

export default Theme;
