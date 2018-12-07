import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import Icon from "react-native-vector-icons/Foundation";

export default class DateTimePickerTester extends Component {
  state = {
    isDateTimePickerVisible: false
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.props.changeDate(date);
    this._hideDateTimePicker();
  };

  renderDateBox(birthDate) {
    let content = "Sélectionner une date";
    if (moment(birthDate).format("DDMMYYYY") !== moment().format("DDMMYYYY")) {
      content = moment(birthDate).format("DD/MM/YYYY");
    }
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginRight: 10, paddingTop: 10 }}>{content}</Text>
        <Icon
          name="calendar"
          size={30}
          color="rgb(171,36,100)"
          style={{ paddingBottom: 35 }}
        />
      </View>
    );
  }

  render() {
    const { birthDate } = this.props;

    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
          onPress={this._showDateTimePicker}
        >
          {this.renderDateBox(birthDate)}
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          cancelTextIOS="Annuler"
          confirmTextIOS="Confirmer"
          date={birthDate}
        />
      </View>
    );
  }
}
