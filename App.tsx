import React from "react";
import { StatusBar, View, Text } from "react-native";
import { enableScreens } from "react-native-screens";

import LoadAssets from "./src/components/LoadAssets";


enableScreens();

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};


const App = () => (
  <LoadAssets {...{ fonts }}>
    <StatusBar barStyle="light-content" />
    <View>
        <Text>KDJFH</Text>
    </View>
  </LoadAssets>
);

export default App;
