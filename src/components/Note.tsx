import { TouchableOpacity, Text } from 'react-native'

type NoteProps = {
  children: React.ReactNode;
  subtitle?: string;
  hidden?: boolean
}

export default function Note({children, subtitle, hidden}: NoteProps) {
  return (
    <TouchableOpacity
      className={`w-full gap-1 border-2 border-[#DCDCDC] rounded-xl p-4 mb-5 ${hidden ? "hidden" : ""}`}
      activeOpacity={.75}
    >
      <Text className="font-bold">{children}</Text>
      <Text className="text-[#888] italic truncate">{subtitle}</Text>
    </TouchableOpacity>
  )
}