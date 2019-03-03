import React, { Component, Fragment } from 'react';
import './App.css';


const Color = ({color}) => {
  const styles = {
    height: '170px',
    width: '170px',
    display: 'inline-block',
    backgroundColor: color
  }
  return <div style={styles}></div>
}

const NUM_BOXES = 32;

class App extends Component {
  constructor(props) {
    super(props);
    const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    this.state = {boxes}

    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const randomIndex = Math.floor(Math.random() * boxes.length);
      boxes[randomIndex] = this.getRandomColor();

      this.setState({boxes});

    }, 300)
  }

  getRandomColor() {
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }

  render() {
    const boxes = this.state.boxes.map((color, ind) => (
      <Color key={ind} color={color} />
    ));
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors:
   [
      "AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
      "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
      "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
      "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
      "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
      "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
      "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
      "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
      "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
      "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
      "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
      "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
      "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
      "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
      "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
      "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
      "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
      "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
      "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
      "Yellow","YellowGreen"
      ]
};

export default App;
