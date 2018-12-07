import React from "react";
import { Image, View, Text, ScrollView, TextInput } from "react-native";

export default class Profil extends React.Component {
  /* static navigationOptions = {
    header: null
  }; */

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
          style={{
            height: 100,
            width: 100,
            backgroundColor: "red",
            overflow: "hidden"
          }}
        >
          {/* <Image
            style={{
              borderRadius: 0,
              position: "absolute",
              top: 10
            }}
            source={require("../../assets/images/profile.jpeg")}
          /> */}
        </View>
        <View
          style={{
            height: 162,
            backgroundColor: "#FFFFFF",
            marginLeft: 10,
            marginRight: 10
          }}
        >
          <Text>Julie Chabannon</Text>
          <Text>Marseille</Text>
          <Text>Membre depuis: 12 juillet 2016</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 3, marginTop: 22 }}>
            <View style={{ marginLeft: 10, marginRight: 5, marginBottom: 5 }}>
              <Text>Mon tableau de bord </Text>
            </View>
            <View
              style={{
                height: 83,
                backgroundColor: "#FFFFFF",
                marginLeft: 10,
                marginRight: 5
              }}
            />
          </View>
          <View style={{ flex: 2, marginTop: 22 }}>
            <View style={{ marginLeft: 5, marginRight: 10, marginBottom: 5 }}>
              <Text>Mon solde actuel </Text>
            </View>

            <View
              style={{
                height: 83,
                backgroundColor: "#FFFFFF",
                marginLeft: 5,
                marginRight: 10
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: 500,
            backgroundColor: "#FFFFFF",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 30
          }}
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
