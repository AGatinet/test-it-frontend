import React from "react";
import {
  Alert,
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
class BankAccount extends React.Component {
  getIbanForm = () => {
    console.log("youpi", this.props);
    const { navigate } = this.props.navigation;
    navigate("IbanForm");
  };
  render() {
    return (
      <View
        style={{
          flex: 1,

          alignItems: "center",

          marginTop: 50,
          justifyContent: "flex-start"
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            width: 300,
            margin: 20,
            borderWidth: 2,
            borderColor: "#ddd",
            shadowColor: "#000000",
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.4,

            backgroundColor: "white"
          }}
          onPress={this.getIbanForm}
        >
          <View style={{ margin: 20 }}>
            <Icon name="plus" size={30} color="black" />
          </View>

          <View style={{ margin: 10, marginBottom: 30 }}>
            <Text>AJOUTER UN IBAN</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default BankAccount;
