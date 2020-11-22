import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from '@shopify/restyle';
import { LoadAssets, Theme } from "./src/components";
import {
    Onboarding,
    Welcome,
    assets as authenticationAssets
} from "./src/Authentication";
import { Routes } from "./src/components/Navigations";

const assets = [...authenticationAssets]

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createStackNavigator<Routes>()

const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
            <AuthenticationStack.Screen name="Welcome" component={Welcome} />
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
