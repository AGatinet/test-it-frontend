// TYPE FORM

// Importer React et ses composants
import React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import {
  Image,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  WebView,
  TouchableOpacity,
  AlertIOS
} from "react-native";

// Créer le composant
class TypeForm extends React.Component {
  getToHistory = () => {
    axios
      .post("http://localhost:3000/participation", {
        Offer_id: this.props.navigation.state.params.id,
        User_id: this.props.navigation.state.params.user_id
      })
      .then(response => {
        console.log("", response.data);
      })
      .catch(e => {
        console.error("error", e);
      });
  };
  render() {
    return (
      <View>
        <View style={styles.BoutonContainer}>
          <TouchableOpacity
            onPress={() => {
              AlertIOS.prompt(
                "Information importante !",
                "\nNous vérifirons toutes les informations avec notre partenaire.\n\nSi vous remplissez des informations inexactes ou si vous participez à l'offre sans y être intéressé, vos gains ne seront pas validés et votre compte pourra être fermé !",
                [
                  {
                    text: "Je valide ma participation",
                    onPress: () => {
                      this.getToHistory();
                      AlertIOS.prompt(
                        "",
                        "Merci d'avoir participé à ce sondage",
                        [
                          {
                            text: "Ok",
                            onPress: () => {
                              this.props.navigation.navigate(
                                "AnnoncesDetails",
                                {
                                  id: this.props.navigation.state.params.id,
                                  pageName: this.props.navigation.state.params
                                    .pageName,
                                  navigation: this.props.navigation
                                }
                              );
                            }
                          }
                        ],
                        { cancelable: false }
                      );
                    }
                  },
                  {
                    text: "J'annule ma participation",
                    onPress: () => {
                      this.props.navigation.navigate("AnnoncesDetails", {
                        id: this.props.navigation.state.params.id,
                        pageName: this.props.navigation.state.params.pageName,
                        navigation: this.props.navigation
                      });
                    }
                  }
                ],
                { cancelable: false }
              );
            }}
          >
            <IonIcon
              name="ios-close-circle-outline"
              style={styles.iconCloseOn}
            />
          </TouchableOpacity>
          <Text style={styles.title}>
            Sondage {this.props.navigation.state.params.companyName}
          </Text>
        </View>
        <View style={styles.WebViewContainer}>
          <WebView
            source={{ uri: this.props.navigation.state.params.typeForm }}
            style={styles.WebView}
          />
        </View>
      </View>
    );
  }
}

// Exporter le composant
export default TypeForm;

// Styles
const styles = StyleSheet.create({
  BoutonContainer: {
    backgroundColor: "#EFEFF4",
    paddingTop: 33,
    flexDirection: "row",
    height: 90,
    alignItems: "center"
  },
  iconCloseOn: {
    color: "#B2025A",
    fontSize: 40,
    margin: 5,
    marginLeft: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#B2025A",
    marginLeft: 10,
    width: 247,
    textAlign: "center"
  },
  WebViewContainer: {
    width: "100%",
    height: "89%"
  },
  WebView: {
    width: "100%",
    flex: 1
  }
});
