import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../assets/colors/colors";

function NumberContainer({ children }) {
    return <View style={styles.container}>
        <Text style={styles.numberText}> {children} </Text>
    </View>
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary500,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: deviceWidth < 380 ? 12 : 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.primary500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontWeight: 'bold'
    }
})