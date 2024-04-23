import BotaoContador from "../Components/BotaoContador/BotaoContador"
import Contador from "../Components/Contador/Contador"
import MostrarTela from "../Components/MostrarTela/MostrarTela"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Tela1() {
  
    return (
      <View >
        {/* Renderizar os componentes */}

        <BotaoContador />
        <Contador />
        <MostrarTela />

        <StatusBar style="auto" />
      </View>
    );
  }