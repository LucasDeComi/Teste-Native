import { Text } from 'react-native'

type SubtitleProps = {
    children: React.ReactNode;
}

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <Text className="text-[16px]">{children}</Text>
  )
}