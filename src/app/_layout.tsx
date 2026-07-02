import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Slot } from "expo-router";
import "../../global.css";

export default function Layout() {
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 bg-[#FDFDFD] p-8">
          <Slot />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
