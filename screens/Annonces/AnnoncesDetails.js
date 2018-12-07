import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Offer extends React.Component {
	render() {
		// console.log(this.props.navigation.state.params.id);
		return (
			<View style={styles.container}>
				<Text>
					This is the props id : {this.props.navigation.state.params.id}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});

export default Offer;
