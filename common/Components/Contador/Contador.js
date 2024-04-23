import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Contador = () => {
  const [valor, setValor] = useState(0);

  const incrementar = () => {
    setValor(valor + 1);
  };

  const decrementar = () => {
    setValor(valor - 1);
  };

  return (
    <View>
      <Button title="-" onPress={decrementar} />
      <Text>{valor}</Text>
      <Button title="+" onPress={incrementar} />
    </View>
  );
};
export default Contador;
