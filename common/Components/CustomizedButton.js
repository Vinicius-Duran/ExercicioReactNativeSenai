import { StyleSheet, Pressable, Text, View } from "react-native";
import COLORS from "../Constraint/Colors";

const estilo = StyleSheet.create({
  botao: {
    backgroundColor: COLORS.PRIMARIA,
    padding: 16,
  },

  botaoPrimario: {
    backgroundColor: COLORS.PRIMARIA,
    
  },

  botaoSecundaria: {
    backgroundColor: COLORS.SECUNDARIA,
   
  },

  botaoTerciaria: {
    backgroundColor: COLORS.TERCIARIA,
   
  },

  textoBotao: {
    color: COLORS.BRANCA,
  },
});

const ButtonCustomized = (props) => {
    const StylesButton = [estilo.botao];

    switch (props.cor){

        case "primaria":
        StylesButton.push(estilo.botaoPrimario)
        break;

        case "secundaria":
        StylesButton.push(estilo.botaoSecundaria)
        break;

        case "terciaria":
        StylesButton.push(estilo.botaoTerciaria)
        break;
    };



  return (
    <Pressable style={StylesButton} onPress={props.onPress}>
      <Text style={estilo.textoBotao}>{props.children}</Text>
    </Pressable>
  );
};

export default ButtonCustomized;
