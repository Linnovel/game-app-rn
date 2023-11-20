import { Text, View, Image, StyleSheet, Dimensions, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../assets/colors/colors";
import PrimaryButton from '../components/ui/PrimaryButton'

function GameIsOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { height, width } = useWindowDimensions()

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }


    return (
        <ScrollView style={styles.screen}>
            <View style={styles.screenContainer}>
                <Title>Game Over</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image
                        style={styles.imageStyle}
                        source={require("../assets/images/success.png")}
                    />
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.summaryText}>{roundsNumber}</Text> rounds to
                    guess the number <Text style={styles.summaryText}>{userNumber}</Text> .
                </Text>
                <PrimaryButton onPress={onStartNewGame}> Start a New Game </PrimaryButton>
            </View>
        </ScrollView>
    );
}
export default GameIsOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        borderRadius: 150,
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderWidth: deviceWidth < 380 ? 75 : 150,
        borderColor: Colors.primary700,
        overflow: "hidden",
        margin: 36,
    },
    imageStyle: {
        width: "100%",
        height: "100%",
    },
    summaryText: {
        fontWeight: "bold",
        color: Colors.primary600,
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    screen: {
        flex: 1
    }
});
