import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  Image
} from "react-native";
import { SearchBar } from "react-native-elements";
import FeatherIcon from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";

export default class Annonces extends React.Component {
  static navigationOptions = {
    title: "Annonces",
    headerStyle: {
      backgroundColor: "#041A39"
    },
    headerTintColor: "#ffffff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  // constructor(props) {
  // 	super(props);
  // 	this.state = {
  // 		id: this.props.navigation.state.params.id,
  // 		offers: [],
  // 		searchParams: {
  // 			title: "",
  // 			priceMin: "",
  // 			priceMax: "",
  // 			sort: ""
  // 		},
  // 		filterItems: [
  // 			{ label: "Prix croissants", value: "Prix croissants" },
  // 			{ label: "Prix décroissants", value: "Prix décroissants" },
  // 			{ label: "Les plus récentes", value: "Les plus récentes" },
  // 			{ label: "Tests les plus courts", value: "Tests les plus courts" },
  // 			{ label: "Tests les plus longs", value: "Tests les plus longs" }
  // 		]
  // 	};
  // }

  state = {
    userId: this.props.navigation.state.params,
    offers: [],
    searchParams: {
      title: "",
      priceMin: "",
      priceMax: "",
      sort: ""
    },
    filterItems: [
      { label: "Prix croissants", value: "Prix croissants" },
      { label: "Prix décroissants", value: "Prix décroissants" },
      { label: "Les plus récentes", value: "Les plus récentes" },
      { label: "Tests les plus courts", value: "Tests les plus courts" },
      { label: "Tests les plus longs", value: "Tests les plus longs" }
    ]
  };

  getOffers = () => {
    AsyncStorage.getItem("userInformation", (err, result) => {
      const userInformation = JSON.parse(result);
      // console.log(userInformation.account);
      const today = new Date();
      const birthDate = new Date(userInformation.account.birthDate);
      const age = today.getFullYear() - birthDate.getFullYear();
      console.log(userInformation);
      axios
        .get(
          "http://localhost:3000/home/with-count?age=" +
            age +
            "&genderTarget=" +
            userInformation.account.sex,
          {
            params: this.state.searchParams
          }
        )
        .then(response => {
          // console.log("Jul le sang", response.data);
          this.setState({
            offers: response.data.offers
          });
        });
    });
  };
  // handleChange = text => {
  // 	// console.log("benzema", text);
  // 	// const name = target.name;
  // 	// // Utile si le formulaire contient des éléments "checkbox"
  // 	// const value = target.type === "checkbox" ? target.checked : target.value;
  // 	this.setState({
  // 		searchParams: {
  // 			title: text
  // 		}, () => {
  // 			this.getOffers();
  // 		}
  // 	});
  // };
  // updateSearchParams = (newSearchParams, callbackFunction) => {
  // 	// newSearchParams -> { title: "Bonnet" }
  // 	this.setState(
  // 		{
  // 			searchParams: {
  // 				...this.state.searchParams, // Je récupère toutes les anciennes valeurs des paramètres de recherche
  // 				...newSearchParams // J'écrase les anciennes valeurs avec les nouvelles valeurs
  // 			}
  // 		},
  // 		callbackFunction
  // 	);
  // };

  render() {
    // const { navigate } = this.props.navigation;
    // console.log("lol", this.state.searchParams.title);
    // console.log("this.props", this.props);

    return (
      <View style={{ backgroundColor: "#EFEFF4" }}>
        <SearchBar
          name="searchParams.title"
          placeholder="Chercher une annonce"
          placeholderTextColor="#8396B2"
          clearIcon={{ color: "#8396B2" }}
          containerStyle={{
            backgroundColor: "#EFEFF4",
            borderTopWidth: 0,
            borderBottomColor: "rgba(0, 0, 0, 0.16)",
            borderBottomWidth: 1,
            borderRadius: 30
          }}
          inputStyle={{
            marginLeft: 10,
            fontStyle: "italic",
            fontSize: 12,
            color: "#8396B2",
            backgroundColor: "white",
            borderColor: "#536D91",
            borderWidth: 1,
            borderRadius: 3
          }}
          onChangeText={text => {
            this.setState(
              {
                searchParams: { title: text }
              },
              () => {
                // console.log(this.state.searchParams.title);
                this.getOffers();
              }
            );
          }}
          // {text => {
          // 	this.setState({
          // 		searchParams: {
          // 			title: text
          // 		}, () => {
          // 			this.getOffers();
          // 		}
          // 	});
          // };
        />
        <ScrollView>
          <View
            style={{
              borderBottomColor: "rgba(0, 0, 0, 0.16)",
              borderBottomWidth: 1,
              borderRadius: 30
            }}
          >
            <Text
              style={{
                color: "#567294",
                fontSize: 18,
                fontWeight: "bold",
                fontStyle: "italic",
                marginBottom: 10,
                marginTop: 20,
                marginLeft: 20
              }}
            >
              A ne pas manquer
            </Text>
          </View>
          <View style={{ display: "flex" }}>
            <ScrollView
              horizontal="true"
              style={{ marginTop: 10 }}
              contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            >
              <View
                style={{
                  backgroundColor: "#252525",
                  marginRight: 10,
                  height: 210,
                  width: 250
                }}
              >
                <View style={{ padding: 5 }}>
                  <Text style={{ color: "lightgray" }}>Matthew Mcon...</Text>
                  <Text style={{ color: "#A2A2A2", fontStyle: "italic" }}>
                    Cooper
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#252525",
                  marginRight: 10,
                  height: 210,
                  width: 250
                }}
              >
                <View style={{ padding: 5 }}>
                  <Text style={{ color: "lightgray" }}>Matthew Mcon...</Text>
                  <Text style={{ color: "#A2A2A2", fontStyle: "italic" }}>
                    Cooper
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#252525",
                  marginRight: 10,
                  height: 210,
                  width: 250
                }}
              >
                <View style={{ padding: 5 }}>
                  <Text style={{ color: "lightgray" }}>Matthew Mcon...</Text>
                  <Text style={{ color: "#A2A2A2", fontStyle: "italic" }}>
                    Cooper
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View
          // style={{
          // 	borderBottomColor: "rgba(0, 0, 0, 0.16)",
          // 	borderBottomWidth: 1,
          // 	borderRadius: 30
          // }}
          >
            <Text
              style={{
                color: "#567294",
                fontSize: 18,
                fontWeight: "bold",
                fontStyle: "italic",
                marginTop: 20,
                marginBottom: 10,
                marginLeft: 20
              }}
            >
              Toutes les annonces
            </Text>
            {/* <TextInput
							ref={el => {
								this.inputRefs.name = el;
							}}
							returnKeyType="next"
							enablesReturnKeyAutomatically
							onSubmitEditing={() => {
								this.inputRefs.picker.togglePicker();
							}}
							style={pickerSelectStyles.inputIOS}
							blurOnSubmit={false}
						/> */}
            <RNPickerSelect
              placeholder={{
                label: "Filtrer par...",
                value: null
              }}
              items={this.state.filterItems}
              onValueChange={value => {
                this.setState(
                  {
                    searchParams: { sort: value }
                  },
                  () => {
                    this.getOffers();
                  }
                );
              }}
              style={{
                inputIOS: {
                  fontSize: 16,
                  paddingTop: 13,
                  paddingHorizontal: 10,
                  paddingBottom: 12,
                  borderWidth: 1,
                  borderColor: "#B3C0CF",
                  borderRadius: 4,
                  backgroundColor: "white",
                  color: "#041A39",
                  marginLeft: 10,
                  marginRight: 10
                },
                icon: {
                  marginRight: 10,
                  borderTopColor: "#041A39"
                }
              }}
              value={this.state.searchParams.sort}
            />
          </View>
          <FlatList
            keyExtractor={item => {
              // item est une offre
              return item._id;
            }}
            data={this.state.offers}
            renderItem={({ item }) => {
              // console.log("lien", item.company.companyAccount.companyLogo[0]);
              return (
                <View
                  style={{ marginTop: 15, marginLeft: 10, marginRight: 10 }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("AnnoncesDetails", {
                        id: item._id
                      });
                      // alert("direction l'offre");
                      // navigate("AnnoncesDetails", { id: item._id });
                    }}
                    style={{
                      borderColor: "#B3C0CF",
                      borderWidth: 1,
                      borderRadius: 5,
                      backgroundColor: "white"
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        // justifyContent: "center",
                        alignItems: "center",
                        padding: 10,
                        borderBottomColor: "#B3C0CF",
                        borderBottomWidth: 1
                      }}
                    >
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: "lightblue",
                          marginRight: 10
                        }}
                      />
                      {/* <Image
												source={{
													uri:
														'"' + item.company &&
														item.company.companyAccount.companyLogo[0] + '"'
												}}
											/> */}
                      <View
                        style={{
                          display: "flex",
                          flex: 1
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#041A39"
                          }}
                        >
                          {item.company &&
                            item.company.companyAccount.companyName}
                          {/* on vérifie que item.company existe avant le populate avec "&&" et ensuite on va chercher la valeur */}
                        </Text>
                        <Text style={{ fontStyle: "italic", color: "#567294" }}>
                          {item.offerName}
                        </Text>
                      </View>
                      <Text style={{ color: "#B2025A", fontSize: 25 }}>
                        {item.price} €
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        // justifyContent: "center",
                        // alignItems: "center",
                        padding: 10,
                        flexDirection: "row"
                      }}
                    >
                      <View
                        style={{
                          width: 100,
                          height: 100,
                          backgroundColor: "lightblue",
                          marginRight: 15
                        }}
                      />
                      <View style={{ display: "flex" }}>
                        <Text
                          style={{
                            color: "#041A39",
                            fontSize: 13,
                            flex: 1,
                            fontWeight: "bold"
                          }}
                        >
                          Type de test : {item.typeOffer}
                        </Text>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            // justifyContent: "center",
                            alignItems: "center",
                            flex: 1
                          }}
                        >
                          <IonIcon
                            name="ios-people"
                            color="#567294"
                            // marginRight="10"
                            // size="25"
                          />
                          <Text style={{ color: "#567294", fontSize: 13 }}>
                            {item.availabilities} place(s) restante(s)
                          </Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            // justifyContent: "center",
                            alignItems: "center",
                            flex: 1
                          }}
                        >
                          <FeatherIcon
                            name="clock"
                            color="#567294"
                            // style={{ marginRight: 10, size: 25 }}
                          />
                          <Text style={{ color: "#567294", fontSize: 13 }}>
                            Temps de test : {item.duration}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    );
  }
  componentDidMount() {
    this.getOffers();
  }
}
