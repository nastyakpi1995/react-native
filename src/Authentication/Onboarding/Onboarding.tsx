import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { interpolateColor, onScrollEvent, useValue } from "react-native-redash";
import Animated, {multiply} from "react-native-reanimated";

import Subslide from './Subslide'
import Slide, { SLIDE_HEIGHT } from "./Slide";

const { width } = Dimensions.get("window");

const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flexDirection: "row",
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS
    }
});

const slides = [
    { label: "Relaxed",
        color: "#BFEAF5",
        subTitle: 'Lorem Ipsum is simply',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.ambled '},
    { label: "Playful",
        color: "#BEECC4",
        subTitle: "It has survived not only five centuries",
        description: "essentially unchanged. It sheets containing Lorelike Aldus PageMaker including"
    },
    { label: "Excentric",
        color: "#FFE4D9",
        subTitle: "It has survived not only",
        description: "essentially unchanged. It was popularised in the 1960s with the release of  PageMaker including"
    },
    { label: "Funky",
        color: "#FFDDDD",
        subTitle: "It has survived not ",
        description: "essentially unchanged. It was popularised in the 1960s with the release of Letraset publishing software like Aldus PageMaker including"
    },
];

const Onboarding = () => {
    const x = useValue(0);
    const onScroll = onScrollEvent({ x })

    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    decelerationRate="fast"
                    scrollEventThrottle={1}
                    snapToInterval={width}
                    {...onScroll}
                >
                    {slides.map(({label }, index) => (
                        <Slide key={index} label={label} right={!!(index % 2)} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View
                    style={{  ...StyleSheet.absoluteFillObject, backgroundColor }}
                />

                <Animated.View
                    style={[
                    styles.footerContent,
                    { width: width * slides.length, flex: 1, transform: [{ translateX: multiply(x, -1) }] }]}>
                        {slides.map(({ subTitle, description }, index) => (
                            <Subslide
                                key={index}
                                last={index === slides.length - 1}
                                {...{ subTitle, description }}
                            />))}
                </Animated.View>
            </View>
        </View>
    );
}

export default Onboarding;
