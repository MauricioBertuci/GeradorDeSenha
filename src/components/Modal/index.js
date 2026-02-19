import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { styles } from "./style"
//npx expo install expo-clipboard
//npx expo install @react-native-async-storage/async-storage
import * as Clipboard from "expo-clipboard"

export function ModalPassword({password,handleClose}) {
    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password);
        alert("Senha copiada!")
        handleClose(); // Fechar modal automatico após copiar senha
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Senha Gerada</Text>
                <Pressable style={styles.innerPassword} onPress={handleCopyPassword}>
                    <Text style={styles.text}>{password}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={handleClose}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}