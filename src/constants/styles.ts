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
    title: {
        fontSize: 32,
        fontWeight: 900
    },
    subtitle: {
        fontSize: 16
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

export const buttonStyles = StyleSheet.create({
    container: {
        width: "100%",
        height: 48,
        backgroundColor: "#3366FF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    label: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: 600
    }
});

export const inputStyles = StyleSheet.create({
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