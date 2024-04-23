import CambioDolar from "../Components/CambioDolar/CambioDolar";
import CambioEuro from "../Components/CambioEuro/CambioEuro";
import CalculoIMC from "../Components/CalculoIMC/CalculoIMC";
import ListaNomes from "../Components/ListaNomes/ListaNomes";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Tela3() {
  return (
    <View>
      {/* Renderizar os componentes */}

      <CambioDolar />
      <CambioEuro />
      <CalculoIMC />
      <ListaNomes />

      <StatusBar style="auto" />
    </View>
  );
}
