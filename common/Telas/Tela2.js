import Somar from "../Components/Somar/Somar"
import Diminuir from "../Components/Diminuir/Diminuir"
import Multiplicar from "../Components/Multiplicar/Multiplicar"
import Dividir from "../Components/Dividir/Dividir"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Tela2() {
  
    return (
      <View>
        {/* Renderizar os componentes */}
       
        <Somar />
        <Diminuir />
        <Multiplicar />
        <Dividir />

        <StatusBar style="auto" />
      </View>
    );
  }