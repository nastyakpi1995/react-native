import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44
    },
    subtitle: {
        fontFamily: "SFProText-Semibold",
        fontSize: 24,
        color: "#0C0D34",
        textAlign: "center",
        lineHeight: 30,
        marginBottom: 12
    },
    description: {
        fontFamily: "SFProText-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34",
        textAlign: "center"
    }
});

interface SubslideProps {
    subTitle: string,
    description: string,
    last?: boolean,
}

const Subslide = ({ subTitle, description }: SubslideProps) => {

    return (
        <View style={styles.container}>
           <Text style={styles.subtitle}>{subTitle}</Text>
           <Text style={styles.description}>{description}</Text>
        </View>
    );
}

export default Subslide;
