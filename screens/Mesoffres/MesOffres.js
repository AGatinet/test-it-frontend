import React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  AsyncStorage
} from "react-native";
import OfferLabel from "../../components/OfferLabel";
import HistoryLabel from "../../components/HistoryLabel";

export default class MesOffres extends React.Component {
  // Barre de navigation
  static navigationOptions = {
    title: "Mes offres",
    headerStyle: {
      backgroundColor: "#041A39"
    },
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: "bold",
      color: "white"
    }
  };
  // Définition des états
  state = {
    user_id: "",
    IsEmpty: true,
    OfferType: "favorites",
    Datas: ""
  };
  // Requêtes axios
  getDatas = () => {
    axios
      .get(
        "http://localhost:3000/" +
          this.state.OfferType +
          "/" +
          this.state.user_id
      )
      .then(response => {
        this.setState(
          {
            Datas: response.data
          },
          () => {
            if (response.data.length === 0) {
              this.setState({
                IsEmpty: true
              });
            } else {
              this.setState({
                IsEmpty: false
              });
            }
          }
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  // Render
  render() {
    const MyDatas = [];
    if (this.state.OfferType === "history") {
      for (let i = 0; i < this.state.Datas.length; i++) {
        MyDatas.push(
          <HistoryLabel
            id={this.state.Datas[i]._id}
            title={this.state.Datas[i].offerName}
            picture={this.state.Datas[i].picture}
            availabilities={this.state.Datas[i].availabilities}
            price={this.state.Datas[i].price}
            typeOffer={this.state.Datas[i].typeOffer}
            duration={this.state.Datas[i].duration}
            picture={this.state.Datas[i].picture}
            companyName={this.state.Datas[i].company.companyAccount.companyName}
            logoCompany={
              this.state.Datas[i].company.companyAccount.companyLogo[0]
            }
            navigation={this.props.navigation}
          />
        );
      }
    } else {
      for (let i = 0; i < this.state.Datas.length; i++) {
        MyDatas.push(
          <OfferLabel
            id={this.state.Datas[i]._id}
            title={this.state.Datas[i].offerName}
            picture={this.state.Datas[i].picture}
            availabilities={this.state.Datas[i].availabilities}
            price={this.state.Datas[i].price}
            typeOffer={this.state.Datas[i].typeOffer}
            duration={this.state.Datas[i].duration}
            picture={this.state.Datas[i].picture}
            companyName={this.state.Datas[i].company.companyAccount.companyName}
            logoCompany={
              this.state.Datas[i].company.companyAccount.companyLogo[0]
            }
            navigation={this.props.navigation}
          />
        );
      }
    }

    return (
      <View>
        <View style={styles.navContainer}>
          <View style={styles.itemsContainer}>
            <Text
              style={styles.nav}
              onPress={() => {
                this.setState(
                  {
                    OfferType: "favorites"
                  },
                  () => {
                    this.getDatas();
                  }
                );
              }}
            >
              FAVORIS
            </Text>
            <Text
              style={styles.nav}
              onPress={() => {
                this.setState(
                  {
                    OfferType: "pendingValidation"
                  },
                  () => {
                    this.getDatas();
                  }
                );
              }}
            >
              EN ATTENTE
            </Text>
            <Text
              style={styles.nav}
              onPress={() => {
                this.setState(
                  {
                    OfferType: "pending"
                  },
                  () => {
                    this.getDatas();
                  }
                );
              }}
            >
              À VENIR
            </Text>
            <Text
              style={styles.navHistorique}
              onPress={() => {
                this.setState(
                  {
                    OfferType: "history"
                  },
                  () => {
                    this.getDatas();
                  }
                );
              }}
            >
              HISTORIQUE
            </Text>
          </View>
          <View style={styles[this.state.OfferType]} />
        </View>
        {/* IF EMPTY */}
        <View
          style={[
            this.state.IsEmpty === true
              ? styles.ifEmptyContainerOn
              : styles.ifEmptyContainerOff
          ]}
        >
          <View>
            <Text style={styles.ifEmptyText}>
              Vous n’avez pas encore d’offre dans cette section
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.ifEmptyButton}
              onPress={() => {
                this.props.navigation.navigate("Annonces", {
                  // id: item._id
                });
              }}
            >
              <Text style={styles.ifEmptyTextButton}>Voir les annonces </Text>
              <IonIcon name="ios-arrow-dropright" style={styles.ifEmptyIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.background}>
          <View>{MyDatas}</View>
        </ScrollView>
      </View>
    );
  }
  componentDidMount() {
    // Récupérer l'id de l'utilisateur
    AsyncStorage.getItem("userInformation").then(value => {
      const userInformation = JSON.parse(value);
      this.setState(
        {
          user_id: userInformation._id
        },
        () => {
          this.getDatas();
        }
      );
    });
  }
}

// Styles
var styles = StyleSheet.create({
  navContainer: {
    flexDirection: "column",
    height: 45,
    backgroundColor: "#041A39"
  },
  itemsContainer: {
    flexDirection: "row",
    height: 43
  },
  nav: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    width: "25%",
    fontSize: 11,
    height: 43,
    paddingTop: 15
  },
  navHistorique: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    width: "25%",
    paddingRight: 7,
    fontSize: 11,
    height: 43,
    paddingTop: 15
  },
  favorites: {
    height: 2,
    width: "25%",
    backgroundColor: "white",
    marginLeft: "0%"
  },
  pendingValidation: {
    height: 2,
    width: "25%",
    backgroundColor: "white",
    marginLeft: "25%"
  },
  pending: {
    height: 2,
    width: "25%",
    backgroundColor: "white",
    marginLeft: "50%"
  },
  history: {
    height: 2,
    width: "25%",
    backgroundColor: "white",
    marginLeft: "75%"
  },
  background: {
    height: "100%"
  },
  ifEmptyContainerOn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginLeft: "5%",
    marginTop: 70,
    height: 150
  },
  ifEmptyContainerOff: {
    overflow: "hidden",
    height: 0
  },
  ifEmptyText: {
    fontSize: 17,
    lineHeight: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#536D91"
  },
  ifEmptyButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 50,
    width: 190,
    height: 42,
    color: "white",
    backgroundColor: "#041A39",
    marginTop: 35
  },
  ifEmptyTextButton: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  },
  ifEmptyIcon: {
    color: "white",
    fontSize: 30,
    marginLeft: 5,
    marginTop: 3
  }
});
