import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CambioEuro = () => {
  const [real, setReal] = useState(0);
  const [euro, setEuro] = useState(0);

  const calcularEuro = () => {
    setEuro(real / 5.5); // 1 real = 1/5.5 euro
  };

  const calcularReal = () => {
    setReal(euro * 5.5); // 1 euro = 5.5 reais
  };

  return (
    <View>
      <TextInput
        keyboardType="numeric"
        value={String(real)}
        onChangeText={(text) => setReal(parseFloat(text))}
      />
      <Button title="Calcular Euro" onPress={calcularEuro} />
      <TextInput
        keyboardType="numeric"
        value={String(euro)}
        onChangeText={(text) => setEuro(parseFloat(text))}
      />
      <Button title="Calcular Real" onPress={calcularReal} />
    </View>
  );
};

export default CambioEuro;
