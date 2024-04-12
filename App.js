import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import COLORS from "./common/Constraint/Colors";
import ButtonCustomized from "./common/Components/CustomizedButton";

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
  botao: {
    backgroundColor: "red",
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoTexto: {
    fontSize: 48,
    color: COLORS.BRANCA,
  },
});

export default function App() {
  const [contador, setContador] = React.useState(0);

  return (
    <View style={estilos.tudo}>
      <ButtonCustomized cor="secundaria" onPress={() => setContador(contador - 1)}>
        -
      </ButtonCustomized>

      <Text style={estilos.contador}>{contador}</Text>

      <ButtonCustomized  cor="primaria" onPress={() => setContador(contador + 1)}>
        +
      </ButtonCustomized>

      <StatusBar style="auto" />
    </View>
  );
}
