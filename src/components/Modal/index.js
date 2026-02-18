import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { styles } from "./style"

export function ModalPassword() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Senha Gerada</Text>
                <Pressable style={styles.innerPassword}>
                    <Text style={styles.text}>1234</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}