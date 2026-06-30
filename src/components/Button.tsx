import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { buttonStyles as styles } from "@/constants/styles"

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