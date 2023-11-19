import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreens from "./screens/StartGameScreens";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreens";
import GameIsOverScreen from "./screens/GameIsOverScreen";


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }


  let screen = <StartGameScreens onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }



  if (gameIsOver && userNumber) {
    screen = <GameIsOverScreen />
  }


  return (
    <LinearGradient
      colors={["#833ab4", "#fd1d1d", "#fcb045"]}
      style={styles.rootBackgroundColor}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootBackgroundColor}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootBackgroundColor}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootBackgroundColor: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
