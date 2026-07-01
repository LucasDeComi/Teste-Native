import { TextInput, TextInputProps } from "react-native"

export default function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput
            className="w-full h-12 border border-[#DCDCDC] rounded-lg pl-3 text-[16px] text-[#000]"
            placeholderTextColor="#888" { ...rest }
        />
    )
}