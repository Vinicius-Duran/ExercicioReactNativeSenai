import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import COLORS from "./common/Constraint/Colors";
// Importar todos os componentes que criamos anteriormente
import BotaoContador from "./common/Components/BotaoContador/BotaoContador";
import Contador from "./common/Components/Contador/Contador";
import MostrarTela from "./common/Components/MostrarTela/MostrarTela";
import Somar from "./common/Components/Somar/Somar";
import Diminuir from "./common/Components/Diminuir/Diminuir";
import Multiplicar from "./common/Components/Multiplicar/Multiplicar";
import Dividir from "./common/Components/Dividir/Dividir";
import CambioDolar from "./common/Components/CambioDolar/CambioDolar";
import CambioEuro from "./common/Components/CambioEuro/CambioEuro";
import CalculoIMC from "./common/Components/CalculoIMC/CalculoIMC";
import RemoverNome from "./common/Components/RemoverNome/RemoverNome";
import ListaNomes from "./common/Components/ReAdd/ListaNomes"; 

const estilos = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: COLORS.FUNDO_ESCURO,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 16,
  },
  contador: {
    fontSize: 72,
    color: COLORS.BRANCA,
  },
  // Remova o estilo para o botão
  // botao: {
  //   backgroundColor: "red",
  //   width: 64,
  //   height: 64,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // botaoTexto: {
  //   fontSize: 48,
  //   color: COLORS.BRANCA,
  // },
});

export default function App() {
  
  // const [contador, setContador] = React.useState(0);

  return (
    <View style={estilos.tudo}>
      {/* Renderizar os componentes */}
      <BotaoContador />
      <Contador />
      <MostrarTela />
      <Somar />
      <Diminuir />
      <Multiplicar />
      <Dividir />
      <CambioDolar />
      <CambioEuro />
      <CalculoIMC />
      <ListaNomes />
      <RemoverNome />

      {/* Comente os botões originais */}
      {/* <ButtonCustomized cor="secundaria" onPress={() => setContador(contador - 1)}>
        -
      </ButtonCustomized>

      <Text style={estilos.contador}>{contador}</Text>

      <ButtonCustomized  cor="primaria" onPress={() => setContador(contador + 1)}>
        +
      </ButtonCustomized> */}

      <StatusBar style="auto" />
    </View>
  );
}
