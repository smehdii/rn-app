import React, { Component } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Text, View } from "react-native";

export default class title extends Component {
  render() {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.titleH3}>{`React   Native   Presents`}</Text>
        <Text style={styles.titleH1}>Viirtual</Text>
        <Text style={styles.titleH2}>Kong</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  titleContainer: {
    marginTop: 90,
    marginBottom: 60,
    alignItems: "center"
  },
  titleH1: {
    fontSize: 60,
    color: "$MenuPrimaryColor",
    textShadowColor: "$MenuSecondaryColor",
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 0,
    fontFamily: "$MenuFont"
  },
  titleH2: {
    fontSize: 40,
    color: "$MenuPrimaryColor",
    textShadowColor: "$MenuSecondaryColor",
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 0,
    fontFamily: "$MenuFont"
  },
  titleH3: {
    fontSize: 15,
    color: "#FFF",
    fontFamily: "$MenuFont"
  }
});
