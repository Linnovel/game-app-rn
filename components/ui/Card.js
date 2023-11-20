import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../assets/colors/colors";

function Card({ children }) {
    return <View style={styles.card}>{children}</View>
}

export default Card;

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    card: {
        marginTop: deviceWidth < 300 ? 18 : 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary700,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
})