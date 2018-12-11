import React from "react";
import {
  Image,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
// import { ImagePicker } from "expo";
// const { Permissions } = Expo;
/* var cloudinary = require("cloudinary");

cloudinary.v2.uploader.upload("../../assets/images/profile.jpeg", function(
  error,
  result
) {
  console.log(result, error);
}); */

// const API_END_POINT = "https://api.cloudinary.com/v1_1/";

// const CLOUD_NAME = "test-it-cloudinary";
// const UPLOAD_PRESET_NAME = "yplphiqg";

export default class Profil extends React.Component {
  /* static navigationOptions = {
    header: null
  }; */

  // state = {
  //   image: null
  // };

  // upload = (file, filename = null) => {
  //   return new Promise((resolve, reject) => {
  //     if (CLOUD_NAME && UPLOAD_PRESET_NAME) {
  //       if (file) {
  //         /* console.log(file); */
  //         const url = `${API_END_POINT}${CLOUD_NAME}/image/upload`;
  //         const fd = new FormData();
  //         fd.append("upload_preset", UPLOAD_PRESET_NAME);
  //         fd.append("file", {
  //           name: "avatar.jpg",
  //           uri: file,
  //           type: "image"
  //         });
  //         const config = {
  //           headers: {
  //             "Content-Type": "multipart/form-data"
  //           }
  //         };
  //         axios
  //           .post(url, fd, config)
  //           .then(res => {
  //             resolve(res);
  //           })
  //           .catch(err => {
  //             reject(err);
  //           });
  //       } else {
  //         reject("You must send a file path to the function.");
  //       }
  //     } else {
  //       reject(
  //         "Credentials must not be empty. Please check your configuration."
  //       );
  //     }
  //   });
  // };

  // _pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     base64: true
  //   });
  //   Expo.FileSystem.readAsStringAsync(result).then(avatar => {
  //     /* console.log(`data:image/jpg;base64,${avatar.base64}`); */
  //     console.log(avatar);
  //     /* this.upload(`data:image/jpg;base64,${avatar.base64}`)
  //       .then(res => console.log("OK", res))
  //       .catch(err => console.error("ERROR", err)); */
  //   });

  //   /* if (!result.cancelled) {
  //     this.setState({ image: result.uri });
  //   } */
  // };

  // componentDidMount() {
  //   Expo.Permissions.getAsync(Permissions.CAMERA_ROLL).then(obj => {
  //     if (obj.permissions.cameraRoll.status === "undetermined") {
  //       Expo.Permissions.askAsync(Permissions.CAMERA_ROLL);
  //     }
  //   });
  // }

  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: "#EFEFF4"
        }}
      >
        <View
          style={{
            height: 90,
            backgroundColor: "#EFEFF4"
          }}
        />
        <View
          style={[
            {
              height: 162,
              backgroundColor: "#FFFFFF",
              marginLeft: 10,
              marginRight: 10
            },
            styles.containerStyle
          ]}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              height: 75,
              alignItems: "center"
            }}
          >
            <View
              style={{
                height: 132,
                width: 132,
                position: "absolute",
                overflow: "hidden",
                top: -66
              }}
            >
              <TouchableOpacity onPress={this._pickImage}>
                <Image
                  style={{
                    width: 132,
                    height: 132,
                    borderRadius: 66,
                    position: "absolute",
                    zIndex: 1
                  }}
                  source={require("../../assets/images/profile.jpeg")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "300",
                color: "#041A39",
                marginBottom: 3
              }}
            >
              Julie Chabannon
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#5B7697",
                marginBottom: 3
              }}
            >
              Marseille
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: "#5B7697"
              }}
            >
              Membre depuis: 12 juillet 2016
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 3, marginTop: 22 }}>
            <View style={{ marginLeft: 10, marginRight: 5, marginBottom: 5 }}>
              <Text>Mon tableau de bord </Text>
            </View>
            <View
              style={[
                {
                  height: 83,
                  backgroundColor: "#FFFFFF",
                  marginLeft: 10,
                  marginRight: 5
                },
                styles.containerStyle
              ]}
            />
          </View>
          <View style={{ flex: 2, marginTop: 22 }}>
            <View style={{ marginLeft: 5, marginRight: 10, marginBottom: 5 }}>
              <Text>Mon solde actuel </Text>
            </View>

            <View
              style={[
                {
                  height: 83,
                  marginLeft: 5,
                  marginRight: 10
                },
                styles.containerStyle
              ]}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#FFFFFF",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    color: "#5B7697"
                  }}
                >
                  53 €
                </Text>
              </View>
              <View
                style={{
                  height: 26,
                  backgroundColor: "#B2025A",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "bold",
                    marginLeft: 7,
                    color: "#FFFFFF"
                  }}
                >
                  Virer vers ma banque
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            {
              height: 500,
              backgroundColor: "#FFFFFF",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 30
            },
            styles.containerStyle
          ]}
        >
          <View
            style={{
              height: 87,

              borderBottomColor: "#EFEFF4",
              borderBottomWidth: 1
            }}
          >
            <Text style={{ marginLeft: 10, marginTop: 13, fontWeight: "bold" }}>
              MON PROFIL TESTEUR
            </Text>
            <Text
              style={{
                lineHeight: 18,
                fontSize: 12,
                color: "#B0B4BA",
                fontStyle: "italic",
                marginTop: 5,
                marginBottom: 10,
                marginLeft: 10
              }}
            >
              Ces informations permettent aux entreprises de faire une sélection
              des profils qui leurs correspondent le mieux
            </Text>
          </View>
          <View>
            <View
              style={{
                marginLeft: 10,
                marginRight: 10,
                marginTop: 20
              }}
            >
              <Text>Mon parcours professionnel</Text>
            </View>

            <TextInput
              secureTextEntry={true}
              placeholder=" École de commerce, Bac +5, Développeur Fullstack "
              style={{
                borderWidth: 1,

                marginLeft: 10,
                marginRight: 10,
                marginTop: 5,
                backgroundColor: "#FFFFFF",
                height: 44,
                borderColor: "#EFEFF4",

                marginBottom: 20
              }}
            />
            <View
              style={{
                marginLeft: 10,
                marginRight: 10,

                marginTop: 0
              }}
            >
              <Text>Mes centres d'intêrets</Text>
            </View>

            <TextInput
              secureTextEntry={true}
              placeholder=" Sculpture, Design, Escalade, Escrime, Cuisine  "
              style={{
                borderWidth: 1,

                marginLeft: 10,
                marginRight: 10,
                marginTop: 5,
                backgroundColor: "#FFFFFF",
                height: 44,
                borderColor: "#EFEFF4",

                marginBottom: 20
              }}
            />
            <View
              style={{
                marginLeft: 10,
                marginRight: 10,

                marginTop: 0
              }}
            >
              <Text>Ma bio</Text>
            </View>

            <TextInput
              secureTextEntry={true}
              placeholder=" Je suis développeur full stack depuis deux ans et j’aime donner mon avis sur des applications mobiles et des sites internets en construction. Je suis passionné d’art et plus particulièrement de sculpture et de design que je pratique de manière régulière. J’ai fait 10 ans d’escalade et 3 ans d’escrime à un niveau national.  "
              style={{
                borderWidth: 1,

                marginLeft: 10,
                marginRight: 10,
                marginTop: 5,
                backgroundColor: "#FFFFFF",
                height: 44,
                borderColor: "#EFEFF4",

                marginBottom: 20
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#ddd",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 1
  }
});
