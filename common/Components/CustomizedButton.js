import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import COLORS from "../Constraint/Colors";

const estilo = StyleSheet.create({

    botao: {
        backgroundColor: COLORS.PRIMARIA,
        padding: 16,
    },

    textoBotao: {
        color: COLORS.BRANCA
    },
});

const ButtonCustomized = (props) => {
  return <TouchableOpacity style={estilo.botao}>
        <text style={estilo.textoBotao}>{props.children}</text>
  </TouchableOpacity>;
};

export default ButtonCustomized;