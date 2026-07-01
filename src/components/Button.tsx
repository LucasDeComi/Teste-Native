import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type ButtonProps = TouchableOpacityProps & {
    children: React.ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            className="w-full h-12 bg-[#3366FF] justify-center items-center rounded-lg"
            activeOpacity={.75} {...rest}
        >
            <Text className="text-[#FFF] text-[16px] font-semibold">{children}</Text>
        </TouchableOpacity>
    )
}