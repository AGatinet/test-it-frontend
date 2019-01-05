// HISTORY LABEL

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
class HistoryLabel extends React.Component {
  state = {
    pageName: "MesOffres"
  };
  render() {
    return (
      <View style={styles.PrincipalContainer}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("AnnoncesDetails", {
              id: this.props.id,
              pageName: this.state.pageName,
              navigation: this.props.navigation
            });
          }}
        >
          <View style={styles.FirstContainer}>
            <View style={styles.LogoOfferContainer}>
              {this.props.typeOffer === "Test produits" ? (
                <IonIcon name="md-outlet" style={styles.iconOffer} />
              ) : (
                <IonIcon name="ios-phone-portrait" style={styles.iconOffer} />
              )}
            </View>
            <View>
              <Text style={styles.NameCompany}>
                {this.props.typeOffer === "Test produits"
                  ? "Test produits"
                  : "Sondage"}
              </Text>
              <Text style={styles.OfferSubTitle} numberOfLines={1}>
                {this.props.companyName + " : " + this.props.title}
              </Text>
              <Text style={styles.OfferSubTitle} numberOfLines={1}>
                Date de participation : 14/12/2018
              </Text>
              <Text style={styles.OfferSubTitle} numberOfLines={1}>
                Statut : En cours de validation
              </Text>
            </View>
            <View>
              <Text style={styles.Price}>{this.props.price} €</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// Exporter le composant
export default HistoryLabel;

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
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 85,
    borderColor: "gray",
    borderWidth: 0.5,
    borderColor: "#CCCCCC",
    backgroundColor: "white"
  },
  SecondContainer: {
    flexDirection: "row",
    height: 120,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  SecondContainerLeft: {
    justifyContent: "center",
    alignItems: "center",
    width: 118,
    padding: 5
  },
  LogoOfferContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 55
  },
  iconOffer: {
    fontSize: 60,
    color: "#567294"
  },
  Image2: {
    width: 95,
    height: 90,
    resizeMode: "cover"
  },
  NameCompany: {
    marginLeft: 3,
    fontSize: 16,
    fontWeight: "bold",
    color: "#041A39",
    width: 205
  },
  OfferTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#567294",
    marginBottom: 3,
    width: 205
  },
  OfferSubTitle: {
    marginTop: 3,
    marginLeft: 3,
    fontSize: 11,
    fontStyle: "italic",
    color: "#567294",
    width: 215
  },
  Price: {
    width: 80,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    color: "#567294"
  },
  OfferFirstTitle: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 1,
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
