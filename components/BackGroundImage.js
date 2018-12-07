import React from "react";
import { ImageBackground, View } from "react-native";
class BackGroundImage extends React.Component {
  render() {
    return (
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        imageStyle={{ opacity: 0.3 }}
        source={require("../assets/images/fondecran.png")}
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}
export default BackGroundImage;
