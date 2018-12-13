import React from "react";

import {
  KeyboardAvoidingView,
  AsyncStorage,
  Image,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class Transition extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.firstName,
    headerStyle: {
      backgroundColor: "rgb(239,239,244)"
    }
  });

  //   static navigationProps = {
  //     header: ({ state }) => {
  //       return {
  //         title: state.params.firstname
  //       };
  //     }
  //   };

  //   componentDidMount() {
  //     this.props.navigation.setParams({
  //       firstName: this.props.navigation.state.params.firstName
  //     });
  //   }

  render() {
    const { navigate } = this.props.navigation;
    // console.log(
    //   "thisprops********%%%%¨¨*¨*¨*¨*¨*¨*¨**",
    //   this.props.navigation.state.params._id
    // );

    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={{
          backgroundColor: "rgb(239,239,244)",
          alignItems: "center",
          flex: 1
        }}
      >
        <Image
          style={{
            height: 160,
            width: 160,
            alignSelf: "center",
            marginTop: 30,
            marginRight: 30
          }}
          source={require("../../assets/images/testit-logo.png")}
        />
        <Text
          style={{
            fontSize: 30,
            color: "black",
            alignSelf: "center"
          }}
        >
          Bienvenue {this.props.navigation.state.params.firstName}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "black",
            alignSelf: "center",
            marginTop: 30
          }}
        >
          Fais ton premier test sut Test-it
        </Text>

        <TouchableOpacity
          style={{
            height: 40,
            width: 190,
            borderRadius: 20,
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            alignSelf: "center"
          }}
          onPress={() =>
            navigate("Main", {
              _id: this.props.navigation.state.params._id
            })
          }
        >
          <Text style={{ color: "white", fontWeight: "900" }}>
            Voir les annonces
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
  // componentDidMount() {
  // 	AsyncStorage.getItem("userInformation", (err, result) => {
  // 		const userInformation = JSON.parse(result);
  // 		console.log(userInformation);
  // 		this.setState({ userInformation: userInformation });
  // 		console.log("state", this.state);
  // 	});
  // }
}
