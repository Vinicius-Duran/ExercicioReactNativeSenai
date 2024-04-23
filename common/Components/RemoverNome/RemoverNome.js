import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RemoverNome = () => {
  const [nomes, setNomes] = useState(["João", "Maria", "José"]);

  const removerNome = (index) => {
    const novosNomes = [...nomes];
    novosNomes.splice(index, 1);
    setNomes(novosNomes);
  };

  return (
    <View>
      <View
        data={nomes}
        renderItem={({ item, index }) => (
          <View>
            <Text>{item}</Text>
            <Button title="Remover" onPress={() => removerNome(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default RemoverNome;
