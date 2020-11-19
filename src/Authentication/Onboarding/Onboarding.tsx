import React from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: "cyan",
        borderBottomRightRadius: 80
    },
    footer: {
        flex: 1
    },
    footerChildren: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 75
    }
})
const Onboarding = () => (
    <View style={styles.container}>
        <View style={styles.slider}>
            <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        decelerationRate="fast"
                        snapToInterval={width} >
                <Slide label="Relaxed" />
                <Slide label="Playful" right />
                <Slide label="Excentric" />
                <Slide label="Funky" right/>
            </ScrollView>
        </View>
        <View style={styles.footer}>
            <View style={{  ...StyleSheet.absoluteFillObject, backgroundColor: "cyan"}}>
                <View style={styles.footerChildren}>

                </View>
            </View>
        </View>
    </View>
);

export default Onboarding;
