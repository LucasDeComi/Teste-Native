import { useState } from "react"
import { View, Image, Text, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native"
import { Link } from "expo-router"
import { pageStyles as styles } from "@/constants/styles"
import Input from "@/components/Input"
import Button from "@/components/Button"

export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn() {
        if(!email.trim || !password.trim()) {
            return Alert.alert("Entrar", "Preencha e-mail e senha para entrar.")
        }

        Alert.alert("Bem-vindo", "Login realizado com sucesso!")
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.select({ ios: "padding", android: "height" })}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={ styles.container }>
                    <Image
                        source={require("@/assets/img1.png")}
                        style={ styles.illustration }
                    />

                    <Text style={ styles.title }>Entrar</Text>
                    <Text style={ styles.subtitle }>Acesse sua conta com e-mail e senha.</Text>

                    <View style={ styles.form }>
                        <Input
                            placeholder="E-mail"
                            keyboardType="email-address"
                            onChangeText={setEmail}
                        />
                        <Input
                            placeholder="Senha"
                            secureTextEntry
                            onChangeText={setPassword}
                        />
                        <Button onPress={handleSignIn}>Entrar</Button>
                    </View>
                    
                    <Text style={ styles.footerText }>
                        Não tem uma conta?{" "}
                        <Link style={ styles.link } href="/signup">Cadastre-se aqui.</Link>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}