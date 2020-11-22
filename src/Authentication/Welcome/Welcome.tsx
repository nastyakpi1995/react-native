import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "../../components/Theme";
import { Button } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigations";

const picture = {
    src: require('../../../assets/cards/2.jpg')
}
const { width, height } = Dimensions.get("window");

export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {

    return  (
        <Box flex={1} backgroundColor="white">
            <Box flex={1}
                 borderBottomRightRadius="xl"
                 backgroundColor="grey"
                 alignItems="center"
                 justifyContent="flex-end">

                <Image source={picture.src} style={{ width: width / 2, height: height / 2}} />
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box backgroundColor="grey"
                     position="absolute"
                     top={0}
                     left={0}
                     right={0}
                     bottom={0}
                />
                <Box backgroundColor="white"
                     borderTopLeftRadius="xl"
                     flex={1}
                     justifyContent="space-evenly"
                     alignItems="center"
                     padding="xl"
                >
                    <Text variant="title2">Let's get started</Text>
                    <Text variant="body" textAlign="center">
                        Login to your account below or signup for an amazing experiense
                    </Text>
                    <Button label="Have an account? Login"
                            variant={"primary"}
                            onPress={() => navigation.navigate("Login")} />
                    <Button label="Join us it's free" onPress={() => navigation.navigate("Login")}  />
                    <Button label="forgot password?" variant={"transparent"} onPress={() => navigation.navigate("Login")} />
                </Box>
            </Box>
        </Box>
    );
}

export default Welcome;
