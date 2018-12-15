import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import Title from "./title";

export default class MainMenu extends Component {
  render() {
    return (
      <ScrollView>
        <Title />
      </ScrollView>
    );
  }
}
