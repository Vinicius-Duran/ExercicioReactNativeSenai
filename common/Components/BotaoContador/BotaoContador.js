import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import COLORS from "../../Constraint/Colors";

const BotaoContador = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <View>
      <Button
        title={`Contador é: ${contador}`}
        onPress={incrementarContador}
      ></Button>
    </View>
  );
};

export default BotaoContador;
