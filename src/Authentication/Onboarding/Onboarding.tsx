import React, {useRef} from "react";
import { View, Dimensions, StyleSheet } from "react-native";
// @ts-ignore
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, {divide, multiply} from "react-native-reanimated";

import Subslide from './Subslide'
import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import Dot from "./Dot";

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

const Onboarding = () => {
    const { scrollHandler, x } = useScrollHandler();
    const scroll = useRef<Animated.ScrollView>(null)

    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
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
                        {slides.map(({ subTitle, description }, index) => (
                            <Subslide
                                key={index}
                                last={index === slides.length - 1}
                                onPress={() => {
                                    if (scroll.current) {
                                        scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true} )
                                    }
                                }}
                                {...{ subTitle, description }}
                            />))}
                    </Animated.View>

                </View>
            </View>
        </View>
    );
}

export default Onboarding;
