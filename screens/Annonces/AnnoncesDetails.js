import React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import MapView from "react-native-maps";
import axios from "axios";
import moment from "moment";
import { Share } from "react-native";
import { BackHandler } from "react-native";
import {
  Image,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  AlertIOS,
  AsyncStorage
} from "react-native";

class Offer extends React.Component {
  state = {
    user_id: "",
    offer: "",
    checkfavorites: "",
    register: false,
    favorites: false,
    companyName: "",
    adresse: "",
    postalCode: "",
    city: "",
    country: "",
    latitude: "",
    longitude: ""
  };
  handleBackPress = () => {
    this.goBack();
    return true;
  };
  register = () => {
    axios
      .post("http://localhost:3000/addRemoveTester", {
        Offer_id: this.props.navigation.state.params.id,
        User_id: this.state.user_id
      })
      .then(response => {
        AlertIOS.alert("", response.data);
      })
      .catch(e => {
        console.error("error", e);
      });
    this.setState({
      register: !this.state.register
    });
  };
  getToFavorites = () => {
    if (this.state.register === true) {
      return AlertIOS.alert("", "Vous vous êtes déjà inscrit à cette offre.");
    }
    axios
      .post("http://localhost:3000/addToFavorite", {
        Offer_id: this.props.navigation.state.params.id,
        User_id: this.state.user_id
      })
      .then(response => {
        AlertIOS.alert("", response.data);
      })
      .catch(e => {
        console.error("error", e);
      });
    this.setState({
      favorites: !this.state.favorites
    });
  };
  share = () => {
    Share.share(
      {
        message:
          "BAM: we're helping your business with awesome React Native apps",
        url: "http://bam.tech",
        title: "Wow, did you see that?"
      },
      {
        // Android only:
        dialogTitle: "Share BAM goodness",
        // iOS only:
        excludedActivityTypes: ["com.apple.UIKit.activity.PostToTwitter"]
      }
    );
  };

  render() {
    return (
      <View>
        <View style={styles.BoutonContainer}>
          <TouchableOpacity
            onPress={() => {
              // this.handleBackPress();
              this.props.navigation.navigate("Annonces", {
                id: this.props.id,
                navigation: this.props.navigation
              });
            }}
          >
            <IonIcon
              name="ios-close-circle-outline"
              style={styles.iconCloseOn}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.getToFavorites();
            }}
          >
            {this.state.favorites === true ? (
              <IonIcon name="ios-heart" style={styles.iconFavorites} />
            ) : (
              <IonIcon name="ios-heart-empty" style={styles.iconFavorites} />
            )}
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollviewContainer}>
          <View style={styles.ImageContainer}>
            {this.state.offer.picture === "" ? (
              <ImageBackground
                style={styles.Image}
                source={require("../../assets/images/placeholder-image.png")}
              />
            ) : (
              <ImageBackground
                style={styles.Image}
                source={{
                  uri: this.state.offer.picture
                }}
              />
            )}
          </View>
          <View style={styles.title}>
            <Text style={styles.companyName}>{this.state.companyName}</Text>
            <Text style={styles.titlePrice}>{this.state.offer.price} €</Text>
          </View>
          <Text style={styles.titleOffer}>{this.state.offer.offerName}</Text>
          {/* Ligne de séparation */}
          <View style={styles.separationLine} />
          {/* =================== */}
          <View />
          <Text style={styles.subTitle}>Critères</Text>
          <View style={styles.ArrayContainer}>
            <View style={styles.ArrayContainerN1}>
              <IonIcon name="ios-calendar" style={styles.icones} />
              <Text style={styles.OfferSecondTitle}>
                Date :{" "}
                {moment(Date(this.state.offer.deadlineTest)).format(
                  "DD-MM-YYYY"
                )}
              </Text>
            </View>
            <View style={styles.ArrayContainerN1}>
              <IonIcon name="ios-walk" style={styles.icones} />
              <Text style={styles.OfferSecondTitle}>
                {/* Type : {this.state.offer.typeOffer} */}
                Type : test produits
              </Text>
            </View>
          </View>
          <View style={styles.ArrayContainer}>
            <View style={styles.ArrayContainerN1}>
              <IonIcon name="ios-timer" style={styles.icones} />
              <Text style={styles.OfferSecondTitle}>
                Durée : {this.state.offer.duration}
              </Text>
            </View>
            <View style={styles.ArrayContainerN1}>
              <IonIcon name="ios-people" style={styles.icones} />
              <Text style={styles.OfferSecondTitle}>
                Nb de places : {this.state.offer.availabilities}
              </Text>
            </View>
          </View>
          {/* Ligne de séparation */}
          <View style={styles.separationLine} />
          {/* =================== */}
          <Text style={styles.subTitle}>Description</Text>
          <Text style={styles.paragraphe}>{this.state.offer.description}</Text>
          <Text style={styles.subTitle}>Profils recherchés</Text>
          <Text style={styles.paragraphe}>
            {this.state.offer.wantedProfiles}
          </Text>
          {/* Ligne de séparation */}
          <View style={styles.separationLine} />
          {/* =================== */}
          <View style={styles.localisationON}>
            <Text style={styles.subTitle}>Localisation</Text>
            <MapView
              style={styles.MapView}
              initialRegion={{
                latitude: 48.8714, //this.state.latitude,
                longitude: 2.30247, //this.state.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: 48.8714, //this.state.latitude,
                  longitude: 2.30247 //this.state.longitude,
                }}
              />
            </MapView>
            <View style={styles.mapCache}>
              <Text style={styles.textMap}>
                {this.state.city} {this.state.postalCode}
              </Text>
              <TouchableOpacity
                style={styles.mapButton}
                onPress={() => {
                  this.props.navigation.navigate("GPS", {
                    id: this.state.offer._id,
                    navigation: this.props.navigation,
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    adresse: this.state.adresse,
                    postalCode: this.state.postalCode,
                    city: this.state.city,
                    country: this.state.country
                  });
                }}
              >
                <Text style={styles.textMapButton}>Voir sur la carte</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.shareContainer}>
            <TouchableOpacity
              style={styles.shareFacebookContainer}
              onPress={() => {
                this.share();
              }}
            >
              <IonIcon name="logo-facebook" style={styles.facebookShare} />
              <Text style={styles.labelShare}>Partager sur Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shareFacebookContainer}
              onPress={() => {
                AlertIOS.alert("", "Le lien à été copié.");
              }}
            >
              <IonIcon name="ios-link" style={styles.facebookShare} />
              <Text style={styles.labelShare}>Copier le lien</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shareFacebookContainer}
              onPress={() => {
                this.share();
              }}
            >
              <IonIcon name="md-share" style={styles.facebookShare} />
              <Text style={styles.labelShare}>Partager</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.end} />
        </ScrollView>
        <View style={styles.registerContainer}>
          {this.state.register === true ? (
            <TouchableOpacity
              style={styles.registerButtonOff}
              onPress={() => {
                this.register();
              }}
            >
              <Text style={styles.textButton}>SE DÉINSCRIRE</Text>
              <IonIcon name="ios-close" style={styles.iconClose} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.registerButtonOn}
              onPress={() => {
                this.register();
              }}
            >
              <Text style={styles.textButton}>S’INSCRIRE</Text>
              <IonIcon name="ios-arrow-dropright" style={styles.iconRegister} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    // Récupérer l'id de l'utilisateur
    AsyncStorage.getItem("userInformation").then(value => {
      const userInformation = JSON.parse(value);
      this.setState({
        user_id: userInformation._id
      });
    });
    // Charger l'annonce et vérifier l'inscription de l'user
    axios
      .get(
        "http://localhost:3000/offer/" + this.props.navigation.state.params.id
      )
      .then(response => {
        this.setState(
          {
            offer: response.data
          },
          () => {
            this.state.offer.listTesters.indexOf(this.state.user_id) === -1
              ? this.setState({
                  register: false
                })
              : this.setState({
                  register: true
                });
            this.setState({
              companyName: this.state.offer.company.companyAccount.companyName,
              adresse: this.state.offer.adress[0].streetName,
              postalCode: this.state.offer.adress[0].zipcode,
              city: this.state.offer.adress[0].city,
              country: this.state.offer.adress[0].country,
              latitude: this.state.offer.adress[0].latitude,
              longitude: this.state.offer.adress[0].longitude
            });
          }
        );
      });
    // Charger l'utilisateur et vérifier les favoris
    axios
      .get("http://localhost:3000/checkfavorites/" + this.state.user_id)
      .then(response => {
        this.setState(
          {
            checkfavorites: response.data
          },
          () => {
            this.state.checkfavorites.indexOf(
              this.props.navigation.state.params.id
            ) === -1
              ? this.setState({
                  favorites: false
                })
              : this.setState({
                  favorites: true
                });
          }
        );
      });
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }
}

const styles = StyleSheet.create({
  scrollviewContainer: {
    height: 635
  },
  ImageContainer: {
    width: "100%",
    height: 200
  },
  Image: {
    flex: 1
  },
  Logo: {
    flex: 1,
    borderRadius: 23
  },
  BoutonContainer: {
    backgroundColor: "#EFEFF4",
    marginTop: 40,
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between"
  },
  iconCloseOn: {
    color: "#B2025A",
    fontSize: 40,
    margin: 5,
    marginLeft: 20
  },
  iconFavorites: {
    color: "#B2025A",
    fontSize: 40,
    margin: 5,
    marginRight: 20
  },
  companyName: {
    fontSize: 22,
    marginLeft: 15,
    marginTop: 10,
    width: "80%"
  },
  titleOffer: {
    marginLeft: 15,
    marginTop: 5,
    fontSize: 15,
    color: "gray",
    width: "80%"
  },
  title: {
    flexDirection: "row"
  },
  titlePrice: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "#B2025A"
  },
  LogoSociété: {
    height: 45,
    width: 45,
    marginLeft: 25
  },
  NomSociétéContainer: {
    paddingLeft: 10,
    width: "80%",
    justifyContent: "center"
  },
  SociétéContainer: {
    flexDirection: "row"
  },
  subTitle: {
    fontSize: 17,
    marginLeft: 15,
    color: "#B2025A",
    marginTop: 15,
    marginBottom: 5
  },
  paragraphe: {
    marginLeft: 15,
    marginRight: 15
  },
  separationLine: {
    width: "100%",
    height: 1,
    borderTopWidth: 0.4,
    borderColor: "lightgray",
    marginTop: 20
  },
  ArrayContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start",
    marginLeft: "auto",
    marginRight: "auto",
    marginLeft: 15
  },
  ArrayContainerN1: {
    flexDirection: "row",
    marginTop: 5,
    width: 180,
    height: 30
  },
  titleN1: {
    fontWeight: "bold",
    fontSize: 13,
    paddingBottom: 5
  },
  titleN2: {
    fontSize: 13
  },
  registerContainer: {
    justifyContent: "start",
    alignItems: "center",
    paddingTop: 15,
    height: 200,
    width: "100%",
    backgroundColor: "#EFEFF4"
  },
  registerButtonOn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "#B2025A",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "lightgray",
    shadowOpacity: 0.2
  },
  registerButtonOff: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "#567294",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "lightgray",
    shadowOpacity: 0.2
  },
  textButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  },
  localisationON: {
    height: 130
  },
  MapView: {
    flex: 1,
    width: "100%",
    position: "relative",
    opacity: 0.3
  },
  mapCache: {
    flex: 1,
    height: 90,
    width: "100%",
    marginTop: 40,
    padding: 15,
    position: "absolute"
  },
  textMap: {
    fontSize: 17,
    color: "#444444"
  },
  mapButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "3%",
    borderColor: "#B2025A",
    marginleft: 15,
    marginTop: 7,
    borderWidth: 1.2,
    height: 30,
    width: 130
  },
  textMapButton: {
    color: "#B2025A"
  },
  shareContainer: {
    flexDirection: "row",
    width: "90%",
    height: 45,
    marginLeft: 9
  },
  shareFacebookContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 0.5,
    borderColor: "#567294",
    marginTop: 3,
    width: "37%"
  },
  facebookShare: {
    marginTop: 3,
    fontSize: 30,
    color: "#567294"
  },
  labelShare: {
    fontSize: 12,
    marginLeft: 7,
    color: "#567294"
  },
  iconRegister: {
    color: "white",
    fontSize: 25,
    marginLeft: 5,
    marginTop: 3
  },
  iconClose: {
    color: "white",
    fontSize: 35,
    marginLeft: 5,
    marginTop: 3
  },
  OfferSecondTitle: {
    fontSize: 14,
    height: 19,
    marginLeft: 5,
    marginTop: 8,
    color: "#567294"
  },
  icones: {
    fontSize: 25,
    marginRight: 2.5,
    marginTop: 3,
    color: "#567294"
  },
  end: {
    height: 50
  }
});

export default Offer;
