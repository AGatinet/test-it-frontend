// OFFER LABEL

// Importer React
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";

// Créer le composant
class OfferLabel extends React.Component {
  render() {
    return (
      <View style={styles.PrincipalContainer}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("AnnoncesDetails", {
              id: this.props.id,
              navigation: this.props.navigation
            });
          }}
        >
          <View style={styles.FirstContainer}>
            <View style={styles.LogoCompany}>
              <Image
                style={styles.Image1}
                source={require("../assets/images/Test_produits.png")}
              />
            </View>
            <View>
              <Text style={styles.NameCompany}>
                {
                  (this.props.typeOffer = "Physique"
                    ? "Test produits"
                    : "Sondage internet")
                }
              </Text>
              <Text style={styles.DescriptionCompany}>{this.props.title}</Text>
            </View>
            <View>
              <Text style={styles.Price}>{this.props.price} €</Text>
            </View>
          </View>
          <View style={styles.SecondContainer}>
            <View style={styles.SecondContainerLeft}>
              {this.props.picture === "" ? (
                <Image
                  style={styles.Image2}
                  source={require("../assets/images/placeholder-image.png")}
                />
              ) : (
                <Image
                  style={styles.Image2}
                  source={{
                    uri: this.props.picture
                  }}
                />
              )}
              <Text>{this.props.picture}</Text>
            </View>
            <View style={styles.SecondContainerRight}>
              <Text>{this.props.picture}</Text>
              <Text style={styles.OfferFirstTitle}>
                {this.props.companyName}
              </Text>
              <View style={styles.OfferSecondTitleContainer}>
                <IonIcon name="ios-people" style={styles.icones} />
                <Text style={styles.OfferSecondTitle}>
                  {this.props.availabilities} place(s) restante(s)
                </Text>
              </View>
              <View style={styles.OfferSecondTitleContainer}>
                <IonIcon name="ios-timer" style={styles.icones} />
                <Text style={styles.OfferSecondTitle}>
                  Durée du test : {this.props.duration}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// Exporter le composant
export default OfferLabel;

// Styles
var styles = StyleSheet.create({
  PrincipalContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    width: "94%",
    marginLeft: "3%",
    marginTop: 12,
    borderWidth: 0.5,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "gray",
    shadowOpacity: 1.0
  },
  FirstContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 53,
    border: "solid",
    borderColor: "gray",
    borderWidth: 0.5,
    borderColor: "#CCCCCC",
    backgroundColor: "white"
  },
  SecondContainer: {
    flexDirection: "row",
    height: 120,
    borderTopWidth: 0,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  SecondContainerLeft: {
    justifyContent: "center",
    alignItems: "center",
    width: 118,
    paddingTop: 12
  },
  LogoCompany: {
    justifyContent: "center",
    alignItems: "center",
    width: 55
  },
  Image1: {
    width: 40,
    height: 40
  },
  Image2: {
    width: 95,
    height: 100,
    resizeMode: "cover"
  },
  NameCompany: {
    marginLeft: 3,
    fontSize: 16,
    fontWeight: "bold",
    color: "#041A39",
    width: 230
  },
  DescriptionCompany: {
    marginLeft: 3,
    fontSize: 10,
    fontStyle: "italic",
    color: "#567294"
  },
  Price: {
    width: 50,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    color: "#B2025A"
  },
  OfferFirstTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#041A39"
  },
  OfferSecondTitleContainer: {
    flexDirection: "row"
  },
  OfferSecondTitle: {
    fontSize: 13,
    height: 15,
    marginLeft: 5,
    marginTop: 8,
    color: "#567294"
  },
  icones: {
    fontSize: 25,
    marginRight: 5,
    marginTop: 3,
    color: "#567294"
  }
});
