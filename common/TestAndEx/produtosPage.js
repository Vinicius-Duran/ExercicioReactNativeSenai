import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native'; // Adicionando Platform aos imports
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') { // Aqui estou usando Platform.OS para verificar a plataforma atual
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Desculpe, precisamos das permissões de acesso à câmera para funcionar corretamente!');
        }
      }
    })();
  }, []);

  const addProduct = () => {
    if (productName.trim() === '') {
      return; // Não permita produtos vazios
    }
    setProducts(prevProducts => [
      ...prevProducts,
      { id: Math.random().toString(), name: productName, image: productImage }
    ]);
    setProductName('');
    setProductImage(null);
  };

  const removeProduct = (id) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log("URI da imagem selecionada:", result.uri);
      setProductImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Lista de Produtos</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome do produto"
            value={productName}
            onChangeText={text => setProductName(text)}
          />
          <Button title="Selecionar Foto" onPress={selectImage} />
          <Button title="Adicionar Produto" onPress={addProduct} />
        </View>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              {item.image && <Image source={{ uri: item.image }} style={styles.productImage} />}
              <Text style={styles.productName}>{item.name}</Text>
              <TouchableOpacity onPress={() => removeProduct(item.id)}>
                <Text style={styles.removeButton}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer - Seu texto aqui</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
  },
  content: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: '50%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 5,
    color: 'white',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productName: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
  removeButton: {
    color: 'red',
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: 'purple',
  },
});
