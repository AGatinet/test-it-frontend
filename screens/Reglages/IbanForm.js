import React from "react";
import {
  Alert,
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  AlertIOS,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class IbanForm extends React.Component {
  static navigationOptions = {
    title: "Ajouter un IBAN"
  };

  ribSaved = () => {
    console.log("youpi", this.props);
    const { navigate } = this.props.navigation;
    AlertIOS.alert("", "IBAN enregistré avec succes");
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={{
            backgroundColor: "rgb(239,239,244)",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 30
          }}
        >
          <Text>Nom et Prénom</Text>
          <TextInput
            style={{
              color: "black",
              height: 35,
              width: 300,
              marginTop: 20,
              borderWidth: 1,
              borderColor: "rgb(103,114,129)",
              marginBottom: 35,
              paddingBottom: 5,
              backgroundColor: "white"
            }}
            type="text"
            name="nom et prenom"
          />
          <Text>Adresse postale</Text>
          <TextInput
            style={{
              color: "black",
              height: 35,
              width: 300,
              marginTop: 15,
              borderWidth: 1,
              borderColor: "rgb(103,114,129)",
              marginBottom: 30,
              paddingBottom: 5,
              backgroundColor: "white"
            }}
            type="text"
            name="adresse postale"
          />
          <Text>IBAN</Text>
          <TextInput
            style={{
              color: "black",
              height: 35,
              width: 300,
              marginTop: 20,
              marginBottom: 30,
              borderWidth: 1,
              borderColor: "rgb(103,114,129)",
              paddingBottom: 5,
              backgroundColor: "white"
            }}
            type="text"
            name="iban"
          />
          <TouchableOpacity
            style={{
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              width: 200,
              margin: 20,
              height: 50,
              borderWidth: 2,
              borderColor: "#ddd",
              shadowColor: "#000000",
              shadowOffset: { width: 5, height: 5 },
              shadowOpacity: 0.4,

              backgroundColor: "white"
            }}
            onPress={this.ribSaved}
          >
            <View>
              <Text>AJOUTER UN IBAN</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default IbanForm;
