// GPS
import React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import MapView from "react-native-maps";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from "react-native";

// Créer la page
class GPS extends React.Component {
  render() {
    return (
      <View>
        {/* <Text>Latitude : {this.props.navigation.state.params.offer._id}</Text> */}
        {/* <Text>{this.props.navigation.state.params.Offer_id}</Text> */}
        <View style={styles.mapViewContainer}>
          <MapView
            style={styles.MapView}
            initialRegion={{
              latitude: this.props.navigation.state.params.latitude,
              longitude: this.props.navigation.state.params.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.props.navigation.state.params.latitude,
                longitude: this.props.navigation.state.params.longitude
              }}
            />
          </MapView>
          <TouchableOpacity
            style={styles.closeButtonContainer}
            onPress={() => {
              this.props.navigation.navigate("AnnoncesDetails", {
                id: this.props.navigation.state.params.id,
                navigation: this.props.navigation
              });
            }}
          >
            <IonIcon name="ios-close-circle" style={styles.closeButton} />
          </TouchableOpacity>
          <View style={styles.adresseContainer}>
            <Text style={styles.adresseTitle}>Adresse :</Text>
            <Text style={styles.adresseN1}>
              {this.props.navigation.state.params.adresse}
            </Text>
            <Text style={styles.adresseN2}>
              {this.props.navigation.state.params.postalCode} -{" "}
              {this.props.navigation.state.params.city} -{" "}
              {this.props.navigation.state.params.country}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

// Exporter le module
export default GPS;

// Styles
const styles = StyleSheet.create({
  mapViewContainer: {
    height: "100%",
    width: "100%"
  },
  MapView: {
    flex: 1,
    position: "relative"
  },
  closeButtonContainer: {
    position: "absolute",
    top: 40,
    left: 20
  },
  closeButton: {
    fontSize: 40,
    color: "red"
  },
  adresseContainer: {
    flexDirection: "column",
    paddingLeft: 15,
    paddingTop: 10,
    width: "100%",
    height: 200,
    top: "87%",
    borderTopWidth: 0.5,
    borderColor: "#041A39",
    position: "absolute",
    backgroundColor: "#EFEFF4"
  },
  adresseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#041A39"
  },
  adresseN1: {
    fontSize: 16,
    paddingTop: 3,
    fontWeight: "bold",
    color: "#567294"
  },
  adresseN2: {
    fontSize: 14,
    paddingTop: 3,
    color: "#567294"
  }
});
