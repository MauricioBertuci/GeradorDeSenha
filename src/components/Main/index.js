import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, TouchableOpacity, Modal } from 'react-native';
import { styles } from './style';
import Logo from "../../assets/logo.png";
// npx expo install @react-native-communitty/slider
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import {ModalPassword} from "../Modal"

const minuscula = "abcdefghijklmnopqrstuvwxyz";
const maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros   = "0123456789";
const simbolo   = "!@#$%&*()";
const charset = minuscula+maiuscula+simbolo+numeros;

export default function App() {
  const [size,setSize] = useState(13)
  const [passwordValue, setPasswordValue] = useState("")

    function generationPassword() {
      let password = "";
      for (let i=0, n = charset.length; i < size; i++) {
        password += charset.charAt(Math.floor(Math.random() *n))
      }
      console.log(password)
      setPasswordValue(password)
    }


  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo}></Image>
      <Text style={styles.title}>{size} caracteres</Text>
      <View style={styles.area}>
        <Slider 
          style={styles.slider} 
          minimumValue={6} 
          maximumValue={20}
          value={size}
          step={1}
          onValueChange={(value) => setSize(value)}>
        </Slider>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={generationPassword}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal>
        <ModalPassword></ModalPassword>
      </Modal>

    </View>
  );
}

