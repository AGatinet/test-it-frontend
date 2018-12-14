import React from "react";
import {
  Image,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  AsyncStorage
} from "react-native";
import { Permissions, ImagePicker } from "expo";

const CLOUD_NAME = "test-it-cloudinary";
const UPLOAD_PRESET_NAME = "yplphiqg";

export default class Profil extends React.Component {
  state = {
    background: "",
    interests: "",
    bio: "",
    button: false,
    image: null,
    firstName: "",
    lastName: "",
    userInformation: ""
  };

  componentDidMount() {
    this.checkPermission(Permissions.CAMERA_ROLL);
    AsyncStorage.getItem("userInformation", (err, result) => {
      const userInformation = JSON.parse(result);
      this.setState({ userInformation: userInformation.account });
      console.log(this.state.userInformation);
    });
  }
  askPermission(type) {
    Expo.Permissions.askAsync(type);
  }

  checkPermission(type) {
    Expo.Permissions.getAsync(type)
      .then(result => {
        if (result.permissions.cameraRoll.status !== "granted") {
          this.askPermission(type);
        } else {
          console.log(`${type}`, result.permissions.cameraRoll.status);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [1, 1],
      base64: true
    });
    if (!result.cancelled) {
      let base64Img = `data:image/jpg;base64,${result.base64}`;

      //Add your cloud name
      let apiUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      let data = {
        file: base64Img,
        folder: "profile",
        upload_preset: UPLOAD_PRESET_NAME
      };

      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json"
        },
        method: "POST"
      })
        .then(async r => {
          let data = await r.json();
          //envoyer au back
          this.setState({
            image: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_400,h_400,c_thumb,g_face/w_200/v${
              data.version
            }/${data.public_id}.jpg`
          });
        })
        .catch(err => console.log(err));
    }
  };

  deleteImage = () => {
    this.setState({ image: null });
  };

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
              <TouchableOpacity onPress={this.pickImage}>
                <View>
                  {this.state.image ? (
                    <Image
                      style={[
                        {
                          width: 132,
                          height: 132,
                          borderRadius: 66,
                          position: "absolute",
                          zIndex: 1
                        },
                        styles.ProfilePictureStyle
                      ]}
                      source={{ uri: this.state.image }}
                    />
                  ) : (
                    <Text />
                  )}
                  {this.state.image ? (
                    <Button
                      onPress={this.deleteImage}
                      title="Supprimer l'image"
                    />
                  ) : (
                    // <Button
                    //   onPress={this.pickImage}
                    //   title="Choisir une image"
                    // />
                    <View
                      style={{
                        height: 132,
                        width: 132,
                        position: "absolute",
                        overflow: "hidden",
                        top: 0
                      }}
                    >
                      <View
                        style={{
                          width: 132,
                          height: 132,
                          backgroundColor: "grey",
                          borderRadius: 66,
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10
                          }}
                        >
                          Choisir une image
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
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
              {this.state.userInformation.firstName}{" "}
              {this.state.userInformation.lastName}
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
            <View style={this.state.button && styles.modalStyle} />
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
            <TouchableOpacity
              onPress={() => {
                this.setState({ button: false });
                console.log(this.state.button);
              }}
            >
              <View style={this.state.button && styles.buttonStyle}>
                <Text
                  style={{
                    marginRight: 5,
                    fontSize: 10,
                    fontWeight: "bold",
                    color: "white"
                  }}
                >
                  {" "}
                  Enregistrer les modifications{" "}
                </Text>
              </View>
            </TouchableOpacity>
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
              secureTextEntry={false}
              id="background"
              name="background"
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
              onChangeText={text => {
                console.log(text);
                this.setState({ background: text, button: true });
                console.log(this.state.button);
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
              id="interests"
              name="interests"
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
              onChangeText={text => {
                console.log(text);
                this.setState({ interests: text, button: true });
                console.log(this.state.interests);
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
              secureTextEntry={false}
              id="bio"
              name="bio"
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
              onChangeText={text => {
                console.log(text);
                this.setState({ bio: text, button: true });
                console.log(this.state.bio);
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
  },
  ProfilePictureStyle: {
    borderWidth: 4,
    borderColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 9
  },
  buttonStyle: {
    height: 27,
    backgroundColor: "#B2025A",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  modalStyle: {
    height: 500,
    width: "100%",

    borderBottomColor: "#EFEFF4",
    borderBottomWidth: 1,
    position: "absolute",
    backgroundColor: "#D0CDCD",
    opacity: 0.5,
    top: -500
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
