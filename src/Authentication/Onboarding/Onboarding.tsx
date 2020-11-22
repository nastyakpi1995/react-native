import React, { useRef } from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
// @ts-ignore
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, { divide, Extrapolate, multiply, interpolate } from "react-native-reanimated";

import Subslide from './Subslide'
import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import Dot from "./Dot";
import theme from "../../components/Theme";
import { StackNavigationProps, Routes } from "../../components/Navigations";

const { width } = Dimensions.get("window");

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
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: BORDER_RADIUS,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        borderBottomRightRadius: theme.borderRadii.xl
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderBottomRightRadius: theme.borderRadii.xl
    }
});

const slides = [
    { label: "Relaxed",
        color: "#BFEAF5",
        picture: require("../../../assets/cards/1.jpg"),
        subTitle: 'Lorem Ipsum is simply',
        description: 'Lorem Ipsum is simply of the printing and typesetting industry.ambled '},
    { label: "Playful",
        color: "#BEECC4",
        picture: require("../../../assets/cards/2.jpg"),
        subTitle: "It has survived not only five centuries",
        description: "essentially unchanged. It sheets Lorelike Aldus PageMaker including"
    },
    { label: "Excentric",
        color: "#FFE4D9",
        picture: require("../../../assets/cards/3.jpg"),
        subTitle: "It has survived not only",
        description: "essentially unchanged. It was 1960s with the release of  PageMaker including"
    },
    { label: "Funky",
        color: "#FFDDDD",
        picture: require("../../../assets/cards/4.jpg"),
        subTitle: "It has survived not",
        description: "essentially unchanged. It was popularised in the 1960s with the release"
    },
];

const Onboarding = ({ navigation }: StackNavigationProps<Routes, "Onboarding">) => {
    const { scrollHandler, x } = useScrollHandler();
    const scroll = useRef<Animated.ScrollView>(null)

    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                {slides.map(({ picture }, index) => {
                    const opacity = interpolate(x, {
                        inputRange: [
                            (index - 0.5) * width,
                            index * width,
                            (index + 0.5) * width],
                        outputRange: [0, 1, 0],
                        extrapolate: Extrapolate.CLAMP
                    });

                    return (
                    <Animated.View key={index} style={[styles.underlay, { opacity }]}>
                        <Image source={picture} style={styles.picture} />
                    </Animated.View>
                ) })

                }
                <Animated.ScrollView horizontal
                                     ref={scroll}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    decelerationRate="fast"
                    snapToInterval={width}
                    {...scrollHandler}
                >
                    {slides.map(({ label, picture }, index) => (
                        <Slide key={index} {...{label, picture }} right={!!(index % 2)} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View
                    style={{  ...StyleSheet.absoluteFillObject, backgroundColor }}
                />

                <View style={[styles.footerContent]}>
                     <View style={styles.pagination}>
                         {slides.map((_, index) => (
                             <Dot key={index} currentIndex={divide(x, width)} { ...{ index, x }} />
                         ))}
                     </View>
                    <Animated.View style={{
                        flex: 1,
                        flexDirection: "row",
                        width: width * slides.length,
                        transform: [{ translateX: multiply(x, -1) }]
                    }}>
                        {slides.map(({ subTitle, description }, index) => {
                            const last = index === slides.length - 1;

                            return (
                                <Subslide
                                    key={index}
                                    last={last}
                                    onPress={() => {
                                        if (last) {
                                            navigation.navigate("Welcome")
                                        } else if (scroll.current) {
                                            scroll.current?.getNode().scrollTo({ x: width * (index + 1), animated: true} )
                                        }
                                    }}
                                    {...{ subTitle, description }}
                                />)}
                        )}
                    </Animated.View>

                </View>
            </View>
        </View>
    );
}

export default Onboarding;
