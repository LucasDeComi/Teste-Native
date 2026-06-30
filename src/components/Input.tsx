import { TextInput, TextInputProps, StyleSheet } from "react-native"

export default function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput style={styles.input} placeholderTextColor="#888" { ...rest } />
    )
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderColor: "#DCDCDC",
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 12
    }
});