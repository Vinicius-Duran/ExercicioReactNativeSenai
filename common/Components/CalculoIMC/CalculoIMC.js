import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CalculoIMC = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [status, setStatus] = useState("");

  const calcularIMC = () => {
    const imc = peso / (altura * altura);
    setResultado(imc);
    if (imc < 18.5) {
      setStatus("Abaixo do peso");
    } else if (imc < 25) {
      setStatus("Peso normal");
    } else if (imc < 30) {
      setStatus("Sobrepeso");
    } else {
      setStatus("Obeso");
    }
  };

  return (
    <View>
      <TextInput
        keyboardType="numeric"
        placeholder="Peso (kg)"
        value={String(peso)}
        onChangeText={(text) => setPeso(parseFloat(text))}
      />
      <TextInput
        keyboardType="numeric"
        placeholder="Altura (m)"
        value={String(altura)}
        onChangeText={(text) => setAltura(parseFloat(text))}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      <Text>IMC: {resultado.toFixed(2)}</Text>
      <Text>Status: {status}</Text>
    </View>
  );
};

export default CalculoIMC;
