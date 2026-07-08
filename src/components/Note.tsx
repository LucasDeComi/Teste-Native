import { TouchableOpacity, Text, Alert } from 'react-native'

type NoteProps = {
  children: React.ReactNode;
  subtitle?: string;
  hidden?: boolean
}

export default function Note({children, subtitle, hidden}: NoteProps) {
  function openModal() {
    Alert.alert(
      "Opções",
      "O que deseja fazer?",
      [
        {
          text: "Renomear",
          onPress: () => console.log("Renomear"),
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => console.log("Excluir"),
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <TouchableOpacity
      className={`w-full gap-1 border-2 border-[#DCDCDC] rounded-xl p-4 mb-5 ${hidden ? "hidden" : ""}`}
      activeOpacity={.75}
      delayLongPress={1000}
      onLongPress={openModal}
    >
      <Text className="font-bold">{children}</Text>
      <Text className="text-[#888] italic truncate">{subtitle}</Text>
    </TouchableOpacity>
  )
}