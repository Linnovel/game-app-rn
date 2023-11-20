import { View, StyleSheet } from "react-native";
import Colors from "../../assets/colors/colors";

function Card({ children }) {
    return <View style={styles.card}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    card: {
        marginTop: 36,
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