import { TextInput, TextInputProps } from "react-native"
import { inputStyles as styles } from "@/constants/styles"

export default function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput style={styles.input} placeholderTextColor="#888" { ...rest } />
    )
}