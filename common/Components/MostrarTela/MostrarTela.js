import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const MostrarTela = () => {
  const [tela, setTela] = useState("");

  const mostrarTexto = (texto) => {
    setTela(texto);
  };

  return (
    <View>
      <Button title="Tela I" onPress={() => mostrarTexto("Tela I")} />
      <Button title="Tela II" onPress={() => mostrarTexto("Tela II")} />
      <Button title="Tela III" onPress={() => mostrarTexto("Tela III")} />
      <Text>{tela}</Text>
    </View>
  );
};

export default MostrarTela;
