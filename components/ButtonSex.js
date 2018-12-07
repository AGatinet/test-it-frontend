import React from "react";
import { TouchableOpacity, Text } from "react-native";

class ButtonSex extends React.Component {
  render() {
    const buttonColor = this.props.selected ? "rgb(171,36,100)" : "black";
    return (
      <TouchableOpacity
        style={{
          height: 40,
          width: 135,
          marginRight: 10,
          borderRadius: 2,
          backgroundColor: buttonColor,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={this.props.onPress}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "800"
          }}
        >
          {this.props.type}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonSex;
