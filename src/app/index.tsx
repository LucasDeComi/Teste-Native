import { useState } from "react"
import { View, Image, Text, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native"
import { Link, useRouter } from "expo-router"
import { pageStyles as styles } from "@/constants/styles"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import Input from "@/components/Input"
import Button from "@/components/Button"

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn() {
        if(!email.trim() || !password.trim()) {
            return Alert.alert("Entrar", "Preencha e-mail e senha para entrar.")
        }

        Alert.alert("Bem-vindo", "Login realizado com sucesso!");

        router.push("/home" as never);
    }

    return (
        <>
            <Image
                source={require("@/assets/img1.png")}
                style={ styles.illustration }
            />

            <Title>Entrar</Title>
            <Subtitle>Acesse sua conta com e-mail e senha.</Subtitle>

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
        </>
    )
}