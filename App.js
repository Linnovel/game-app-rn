import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreens from "./screens/StartGameScreens";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreens";
import GameIsOverScreen from "./screens/GameIsOverScreen";
import { StatusBar } from 'expo-status-bar'


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);



  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }


  let screen = <StartGameScreens onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }



  if (gameIsOver && userNumber) {
    screen = <GameIsOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }


  return (
    <StatusBar style="light">
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
    </StatusBar>
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
