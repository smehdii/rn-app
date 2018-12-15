import React, { PureComponent } from "react";
import { ScrollView, Text, Platform } from "react-native";
import Title from "./title";
import Button from "./button";
import EStyleSheet from "react-native-extended-stylesheet";
import Item from "./item";
import Heading from "./heading";
export default class MainMenu extends PureComponent {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Title />
        <Button onPlayGame={this.props.onPlayGame}>Play Game</Button>
        <Heading>{`Made With ${
          Platform.OS == "ios" ? "🍌🍌🍌" : ".."
        }`}</Heading>

        <Item
          onPress={_ =>
            Linking.openURL(
              "https://github.com/bberak/react-native-game-engine"
            )
          }
        >
          React Native Game Engine
        </Item>
        <Item onPress={_ => Linking.openURL("http://brm.io/matter-js")}>
          Matter Js
        </Item>
        <Item onPress={_ => Linking.openURL("https://www.aseprite.org")}>
          Aseprite
        </Item>
        <Item
          onPress={_ => Linking.openURL("https://www.spriters-resource.com")}
        >
          Spriters Resource
        </Item>
        <Item>
          All content, artwork, sounds, characters and graphics are the property
          of Nintendo of America Inc, its affiliates and/or subsidiaries.
        </Item>
      </ScrollView>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "$MenuBackgroundColor"
  }
});
