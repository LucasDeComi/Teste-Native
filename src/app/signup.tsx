import { useState } from "react"
import { View, Image, Text, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native"
import { Link, useRouter } from "expo-router"
import { pageStyles as styles } from "@/constants/styles"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import Input from "@/components/Input"
import Button from "@/components/Button"

export default function Signup() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    function handleSignUp() {
        if(!name.trim() || !email.trim() || !password.trim() || !confirm.trim()) {
            return Alert.alert("Cadastrar", "Preencha todos os campos.");
        }

        if(password !== confirm) {
            return Alert.alert("Cadastrar", "A confirmação e a senha devem ser iguais.")
        }

        Alert.alert("Concluído", "Usuário cadastrado com sucesso!");

        router.push("/");
    }

    return (
        <>
            <Image
                source={require("@/assets/img2.png")}
                style={ styles.illustration }
            />

            <Title>Cadastrar</Title>
            <Subtitle>Crie sua conta para acessar.</Subtitle>

            <View style={ styles.form }>
                <Input
                    placeholder="Nome"
                    onChangeText={setName}
                />
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
                <Input
                    placeholder="Confirmar Senha"
                    secureTextEntry
                    onChangeText={setConfirm}
                />
                <Button onPress={handleSignUp}>Cadastrar</Button>
            </View>
            
            <Text style={ styles.footerText }>
                Já tem uma conta?{" "}
                <Link style={ styles.link } href="/">Entre aqui.</Link>
            </Text>
        </>
    )
}