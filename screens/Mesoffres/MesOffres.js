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
    Datas: "",
    gains: ""
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
  getHistory = () => {
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
            this.setState({
              IsEmpty: false
            });
            let gains = 0;
            for (let i = 0; i < this.state.Datas.length; i++) {
              gains += this.state.Datas[i].price;
            }
            this.setState({
              gains: gains
            });
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
                    this.getHistory();
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
        {this.state.OfferType === "history" ? (
          // GAINS GAINS GAINS GAINS GAINS GAINS GAINS GAINS GAINS
          <View style={styles.gainContainer}>
            <View style={styles.gainContainerHaut}>
              <View style={styles.gainContainerHautGauche}>
                <Text style={styles.solde}>Solde de votre compte</Text>
              </View>
              <View style={styles.gainContainerHautRight}>
                <Text style={styles.totalGain}>{this.state.gains} €</Text>
              </View>
            </View>
            <Text style={styles.soldeSubTitle}>
              Des 20€ de gains validés, vous pouvez demander un paiement.
            </Text>
            <View style={styles.gainContainerBas}>
              <View style={styles.gainContainerBasGauche}>
                <Text style={styles.detailGain1}>Détail de vos gains :</Text>
                <View style={styles.ArrayLabel}>
                  <IonIcon name="ios-checkmark-circle" style={styles.icon1} />
                  <Text style={styles.gainsN2}>Gains validés</Text>
                  <Text style={styles.gainsN3}>0 €</Text>
                </View>
                <View style={styles.ArrayLabel}>
                  <IonIcon name="ios-alarm" style={styles.icon2} />
                  <Text style={styles.gainsN2}>Gains en attente</Text>
                  <Text style={styles.gainsN3}>{this.state.gains} €</Text>
                </View>
              </View>
              <View style={styles.gainContainerBasDroit}>
                <Text style={styles.detailGain3}>
                  Cumul vos gains depuis le 12/12/2018
                </Text>
                <Text style={styles.gainsN4}>{this.state.gains} €</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bouttonPaiement}>
              <Text style={styles.bouttonPaiementText}>
                Demander le paiement
              </Text>
            </TouchableOpacity>
            <Text style={styles.gainsN5}>Détail de mes participations</Text>
          </View>
        ) : (
          // GAINS GAINS GAINS GAINS GAINS GAINS GAINS GAINS GAINS
          <View />
        )}
        <ScrollView style={styles.background}>
          <View>{MyDatas}</View>
          <View style={styles.end} />
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
  },
  gainContainer: {
    flexDirection: "column",
    width: "100%",
    paddingTop: 15,
    paddingLeft: 15,
    marginBottom: 5
  },
  gainContainerHaut: {
    flexDirection: "row"
  },
  gainContainerBas: {
    flexDirection: "row"
  },
  gainContainerHautGauche: {
    flexDirection: "column"
  },
  gainContainerHautRight: {
    justifyContent: "center",
    alignItems: "center"
  },
  solde: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#041A39",
    paddingBottom: 7
  },
  soldeSubTitle: {
    fontSize: 11.5,
    color: "#041A39"
  },
  totalGain: {
    fontSize: 25,
    color: "#B2025A",
    fontWeight: "bold",
    marginLeft: 78,
    textAlign: "right"
  },
  gainContainerBasGauche: {
    flexDirection: "column",
    width: 180,
    marginTop: 5
  },
  gainContainerBasDroit: {
    flexDirection: "column",
    width: 150,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 15,
    padding: 5
  },
  detailGain1: {
    marginTop: 5,
    marginBottom: 2.5,
    color: "#041A39",
    fontWeight: "bold"
  },
  detailGain2: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    color: "#041A39"
  },
  detailGain3: { textAlign: "center", color: "#041A39" },
  detailGain4: {
    textAlign: "center",
    color: "#041A39"
  },
  ArrayLabel: {
    flexDirection: "row",
    marginTop: 5,
    height: 30,
    width: 190,
    backgroundColor: "#FBFBFB",
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    borderRadius: 10,
    borderColor: "#CCCCCC",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "gray",
    shadowOpacity: 1.0
  },
  icon1: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 3,
    marginLeft: 8,
    marginRight: 7,
    height: 40,
    width: 20,
    textAlign: "center",
    color: "green"
  },
  icon2: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 2,
    marginLeft: 8,
    marginRight: 7,
    height: 40,
    width: 20,
    textAlign: "center",
    color: "orange"
  },
  gainsN2: {
    fontSize: 13,
    color: "#041A39",
    marginTop: 6,
    width: 100
  },
  gainsN3: {
    fontSize: 13,
    color: "#041A39",
    marginTop: 6,
    marginRight: 5,
    width: 45,
    textAlign: "right"
  },
  gainsN4: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#041A39",
    marginTop: 6,
    width: 45,
    textAlign: "center"
  },
  gainsN5: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#B2025A",
    paddingTop: 25
  },
  bouttonPaiement: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "#B2025A",
    marginTop: 15
  },
  bouttonPaiementText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  },
  end: {
    width: "100%",
    height: 60
  }
});
