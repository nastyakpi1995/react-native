import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text } from "../../components";

const { height, width } = Dimensions.get("window")
export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
    container: {
        width,
        overflow: "hidden"
    },
    titleContainer: {
        height: 100,
        justifyContent: "center",
    },
    title: {
        textAlign: "center"
    }
})

interface slideProps {
    label: string,
    right?: boolean,
}

const Slide = ({ label, right }: slideProps) => {
    const transform = [
        {translateY: (SLIDE_HEIGHT - 100) / 2},
        {translateX: (right ? width / 2 - 50 : -width / 2 + 50)},
        { rotate: right ? "-90deg" : "90deg" }
    ]
    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, { transform }]}>
                <Text variant="title3" style={styles.title}>{label}</Text>
            </View>
        </View>
    );
}

export default Slide;