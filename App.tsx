import React from "react";
import { ThemeProvider } from '@shopify/restyle';
import { LoadAssets, Theme } from "./src/components";
import {
    assets as authenticationAssets,
    AuthenticationNavigator
} from "./src/Authentication";

const assets = [...authenticationAssets]

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const App = () => (
    <ThemeProvider theme={Theme}>
        <LoadAssets {...{ fonts, assets }}>
            <AuthenticationNavigator />
        </LoadAssets>
    </ThemeProvider>
);

export default App;
