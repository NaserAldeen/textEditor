import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: "black",
    italic: false,
    underline: false,
    bold: false
  };
  fnStyle = styl => {
    if (styl == "bold") {
      if (this.state.bold) {
        this.refs.bold.className = "btn btn-primary btn-lg mx-3";
        this.setState({ bold: false });
      } else {
        this.refs.bold.className = "btn btn-danger btn-lg mx-3";
        this.setState({ bold: "bold" });
      }
    }
    if (styl == "italic") {
      if (this.state.italic) {
        this.refs.italic.className = "btn btn-primary btn-lg mx-3";
        this.setState({ italic: false });
      } else {
        this.refs.italic.className = "btn btn-danger btn-lg mx-3";
        this.setState({ italic: "italic" });
      }
    }
    if (styl == "underline") {
      if (this.state.underline) {
        this.refs.underline.className = "btn btn-primary btn-lg mx-3";
        this.setState({ underline: false });
      } else {
        this.refs.underline.className = "btn btn-danger btn-lg mx-3";
        this.setState({ underline: "underline" });
      }
    }
  };
  fnColor = styl => {
    this.setState({ color: styl });
  };

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col mb-5 mx-auto ">
          <button
            className="btn btn-primary btn-lg mx-3"
            style={styles[style]}
            key={style}
            ref={style}
            onClick={() => this.fnStyle(style)}
          >
            {style}
          </button>
        </div>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          className="mx-2 btn btn-primary btn-lg"
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.fnColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div
          className="container jumbotron mt-5 text-center"
          style={{ width: "50%" }}
        >
          <div className="row">{stylingBoxes}</div>
          <p style={{ fontSize: "25px" }}>Your text here:</p>
          <textarea
            className="form-control mb-4"
            style={{
              color: this.state.color,
              ...styles[this.state.bold],
              ...styles[this.state.italic],
              ...styles[this.state.underline],
              width: "100%",
              height: "200px",
              fontSize: "35px"
            }}
          />
          <div className="my-3">{colorBoxes}</div>
        </div>
      </div>
    );
  }
}

export default App;
