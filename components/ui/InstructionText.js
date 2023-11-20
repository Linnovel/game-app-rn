import { Text, StyleSheet } from "react-native";
import Colors from "../../assets/colors/colors";

function InstructionText({ children, style }) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontWeight: 'bold',
        color: Colors.primary500,
        fontSize: 24,
    },

})