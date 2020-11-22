import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import { Theme, Text } from "./Theme";

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    label: {
        textAlign: "center"
    },
});

interface ButtonProps {
    label: string,
    variant: "default" | "primary",
    onPress: () => void;
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
    const theme = useTheme<Theme>()
    const backgroundColor =
        variant === "primary" ?  theme.colors.primary : theme.colors.gray;
    const color = variant === "primary" ? theme.colors.white : theme.colors.text;

    return (
        <RectButton style={[styles.container, { backgroundColor }]} {...{ onPress}}>
                <Text variant="button" style={[styles.label, { color }]}>{ label }</Text>
        </RectButton>
    );
}

Button.defaultProps = { variant: "default" };

export default Button;
