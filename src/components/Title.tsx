import { Text } from 'react-native'

type TitleProps = {
    children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <Text className="text-[32px] font-black">{children}</Text>
  )
}