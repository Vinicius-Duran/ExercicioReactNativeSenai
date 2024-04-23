import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const ListaNomes = () => {
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState(["João", "Maria", "José"]);

  const adicionarNome = () => {
    setNomes([...nomes, nome]);
    setNome("");
  };

  const removerNome = (index) => {
    const novosNomes = [...nomes];
    novosNomes.splice(index, 1);
    setNomes(novosNomes);
  };

  return (
    <View>
      <TextInput
        placeholder="Digite um nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <Button title="Adicionar" onPress={adicionarNome} />
      <FlatList
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

export default ListaNomes;