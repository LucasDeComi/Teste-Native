import { StyleSheet } from "react-native"

export const pageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDFDFD",
        padding: 32
    },
    illustration: {
        width: "100%",
        height: 330,
        resizeMode: "contain",
        marginTop: 62
    },
    form: {
        marginTop: 24,
        gap: 12
    },
    footerText: {
        textAlign: "center",
        marginTop: 24,
        color: "#585860"
    },
    link: {
        color: "#4F6CF3",
        fontWeight: 700,
        textDecorationLine: "underline"
    }
});