import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from '@shopify/restyle';
import { LoadAssets, Theme } from "./src/components";
import { Onboarding } from "./src/Authentication";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createStackNavigator()

const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
        </AuthenticationStack.Navigator>
    )
}
const App = () => (
    <ThemeProvider theme={Theme}>
        <LoadAssets {...{ fonts }}>
            <AuthenticationNavigator />
        </LoadAssets>
    </ThemeProvider>
);

export default App;
