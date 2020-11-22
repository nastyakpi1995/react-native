import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "../../components";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 44,
        flex: 1,
    },
    subtitle: {
        marginBottom: 12,
        textAlign: "center"
    },
    description: {
        textAlign: "center",
    }
});

interface SubslideProps {
    subTitle: string,
    description: string,
    last?: boolean,
    onPress: () => void
}

const Subslide = ({ subTitle, description, last, onPress }: SubslideProps) => {

    return (
        <View style={styles.container}>
           <Text variant="title2" style={styles.subtitle}>{subTitle}</Text>
           <Text variant="body" style={styles.description}>{description}</Text>
            <Button
                label={last ? `Let's get started` : 'Next'}
                variant={last ? 'primary' : 'default'} {...{ onPress }} />
        </View>
    );
}

export default Subslide;
