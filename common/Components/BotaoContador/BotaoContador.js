import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const BotaoContador = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <View>
      <Button title={`Contador é: ${contador}`} onPress={incrementarContador} />
    </View>
  );
};

export default BotaoContador;
