import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

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

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={this._showDateTimePicker}
          
        >
          <Text>Sélectionner une date</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
}
