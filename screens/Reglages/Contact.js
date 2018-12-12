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
class ContactUs extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ margin: 25, fontSize: 20 }}>
          Pour toute questions relatives à l'application, veuillez contacter
          notre support à l'adresse suivante:
        </Text>
        <Text style={{ fontWeight: "700", margin: 25, fontSize: 21 }}>
          antoine.godemichet@jaime.fr
        </Text>
      </View>
    );
  }
}

export default ContactUs;
