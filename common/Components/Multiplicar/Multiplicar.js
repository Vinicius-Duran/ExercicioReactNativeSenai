import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Multiplicar = () => {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const multiplicarValores = () => {
    setResultado(valor1 * valor2);
  };

  return (
    <View>
      <TextInput
        keyboardType="numeric"
        value={String(valor1)}
        onChangeText={(text) => setValor1(parseFloat(text))}
      />
      <TextInput
        keyboardType="numeric"
        value={String(valor2)}
        onChangeText={(text) => setValor2(parseFloat(text))}
      />
      <Button title="Multiplicar" onPress={multiplicarValores} />
      <Text>Resultado: {resultado}</Text>
    </View>
  );
};


export default Multiplicar;