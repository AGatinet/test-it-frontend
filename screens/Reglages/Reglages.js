import React from "react";
import {
  Alert,
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconIonicons from "react-native-vector-icons/Ionicons";

export default class ReglagesScreen extends React.Component {
  static navigationOptions = {
    title: "Paramètres"
  };

  logOut = () => {
    AsyncStorage.removeItem("userInformation").then(() => {
      this.props.navigation.navigate("Auth");
    });
  };

  getContact = () => {
    console.log("youpi", this.props);
    const { navigate } = this.props.navigation;
    navigate("ContactUs");
  };
  getBank = () => {
    console.log("youpi", this.props);
    const { navigate } = this.props.navigation;
    navigate("BankAccount");
  };

  render() {
    const { navigate } = this.props.navigation;
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
            flexDirection: "row",
            width: 300,
            margin: 20,
            borderWidth: 2,
            borderColor: "#ddd",
            shadowColor: "#000000",
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.4,

            backgroundColor: "white"
          }}
          onPress={this.getBank}
        >
          <View
            style={{ marginLeft: 20, marginRight: 40, paddingVertical: 15 }}
          >
            <IconEntypo name="credit-card" size={30} color="#428CC4" />
          </View>
          <View style={{ marginRight: 50 }}>
            <Text>MES DONNÉES BANCAIRES</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            flexDirection: "row",
            borderWidth: 2,
            width: 300,
            margin: 20,
            borderColor: "#ddd",
            shadowColor: "#000000",
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.4,

            backgroundColor: "white"
          }}
          onPress={this.getContact}
        >
          <View
            style={{ marginLeft: 20, marginRight: 40, paddingVertical: 15 }}
          >
            <IconIonicons name="ios-mail" size={30} color="#F7F1D9" />
          </View>
          <View style={{ marginRight: 50 }}>
            <Text>NOUS CONTACTER</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            flexDirection: "row",
            borderWidth: 2,
            margin: 20,
            width: 300,
            borderColor: "#ddd",
            shadowColor: "#000000",
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.4,

            backgroundColor: "white"
          }}
          onPress={this.logOut}
        >
          <View
            style={{ marginLeft: 20, marginRight: 40, paddingVertical: 15 }}
          >
            <Icon name="power-off" size={30} color="red" />
          </View>
          <View style={{ marginRight: 50 }}>
            <Text>DECONNEXION</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
