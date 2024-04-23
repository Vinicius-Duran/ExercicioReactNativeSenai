import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CambioDolar = () => {
  const [real, setReal] = useState(0);
  const [dolar, setDolar] = useState(0);

  const calcularDolar = () => {
    setDolar(real / 5); // 1 real = 1/5 dólar
  };

  const calcularReal = () => {
    setReal(dolar * 5); // 1 dólar = 5 reais
  };

  return (
    <View>
      <TextInput
        keyboardType="numeric"
        value={String(real)}
        onChangeText={(text) => setReal(parseFloat(text))}
      />
      <Button title="Calcular Dólar" onPress={calcularDolar} />
      <TextInput
        keyboardType="numeric"
        value={String(dolar)}
        onChangeText={(text) => setDolar(parseFloat(text))}
      />
      <Button title="Calcular Real" onPress={calcularReal} />
    </View>
  );
};
export default CambioDolar;
