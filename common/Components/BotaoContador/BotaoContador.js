import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import COLORS from "../../Constraint/Colors";

const estilos = StyleSheet.create({
  btn: {
    color: COLORS.FUNDO_ESCURO,
    backgroundColor: COLORS.SECUNDARIA,
  },

  tudo: {
    color: COLORS.FUNDO_ESCURO,
    backgroundColor: COLORS.SECUNDARIA,
  },
});

const BotaoContador = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <View style={estilos.tudo}>
      <Button
        style={estilos.tudo}
        title={`Contador é: ${contador}`}
        onPress={incrementarContador}
      ></Button>
    </View>
  );
};

export default BotaoContador;
