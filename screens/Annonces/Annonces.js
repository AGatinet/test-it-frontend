import React from "react";
import {
	View,
	Text,
	ScrollView,
	FlatList,
	TouchableOpacity
} from "react-native";
import { SearchBar } from "react-native-elements";
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

	state = {
		offers: [],
		searchParams: {
			title: "",
			priceMin: "",
			priceMax: "",
			sort: "date-desc"
		}
	};

	updateSearchParams = (newSearchParams, callbackFunction) => {
		// newSearchParams -> { title: "Bonnet" }
		this.setState(
			{
				searchParams: {
					...this.state.searchParams, // Je récupère toutes les anciennes valeurs des paramètres de recherche
					...newSearchParams // J'écrase les anciennes valeurs avec les nouvelles valeurs
				}
			},
			callbackFunction
		);
	};

	render() {
		// console.log("lol", this.state.offers);
		return (
			<View style={{ backgroundColor: "#EFEFF4" }}>
				<SearchBar
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
								marginTop: 20,
								marginBottom: 10,
								marginLeft: 20
							}}
						>
							Toutes les annonces
						</Text>
					</View>
					<FlatList
						keyExtractor={item => {
							// item est une offre
							return item._id;
						}}
						data={this.state.offers}
						renderItem={({ item }) => {
							return (
								<View
									style={{ marginTop: 15, marginLeft: 10, marginRight: 10 }}
								>
									<TouchableOpacity
										onPress={() => {
											// this.props.navigation.navigate("Room", item);
											alert("direction l'offre");
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
											{/* <Image source={item.company && item.company.companyAccount.companyLogo} */}
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
												justifyContent: "center",
												alignItems: "center",
												padding: 10
											}}
										>
											<Text style={{ color: "#041A39", fontSize: 13 }}>
												Type de test : {item.typeOffer}
											</Text>
											<Text style={{ color: "#567294", fontSize: 13 }}>
												{item.availabilities} place(s) restante(s)
											</Text>
											<Text style={{ color: "#567294", fontSize: 13 }}>
												Temps de test : {item.duration}
											</Text>
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
		axios
			.get("http://localhost:3000/home?age=" + 25 + "&genderTarget=Homme", {
				params: this.state.searchParams
			})
			.then(response => {
				// console.log("Jul le sang", response.data);
				this.setState({
					offers: response.data
				});
			});
	}
}
