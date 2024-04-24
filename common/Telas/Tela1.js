import BotaoContador from "../Components/BotaoContador/BotaoContador"
import Contador from "../Components/Contador/Contador"
import MostrarTela from "../Components/MostrarTela/MostrarTela"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import COLORS from "../Constraint/Colors";

export default function Tela1() {
  
  const estilos = StyleSheet.create({
    tudo: {
      flex: 1,
      color: COLORS.BRANCA,
      gap: 16,
      width: "100%",
      height: "100%",
    },
  });

    return (
      <View style={estilos.tudo}>
        {/* Renderizar os componentes */}

        <BotaoContador />
        <Contador />
        <MostrarTela />

        <StatusBar style="auto" />
      </View>
    );
  }