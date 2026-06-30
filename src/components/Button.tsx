import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type ButtonProps = TouchableOpacityProps & {
    children: React.ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={.75} {...rest}>
            <Text style={styles.label}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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