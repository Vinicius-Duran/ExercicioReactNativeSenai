import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // Importe o NavigationContainer
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import COLORS from "./common/Constraint/Colors";
import Tela1 from "./common/Telas/Tela1";
import Tela2 from "./common/Telas/Tela2";
import Tela3 from "./common/Telas/Tela3";

const estilos = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: COLORS.FUNDO_ESCURO,
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.BRANCA,
    gap: 16,
  },
});

export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer> {/* Envolve todo o seu aplicativo com o NavigationContainer */}
      <View style={estilos.tudo}>
        <Tab.Navigator>
          <Tab.Screen name="Tela1" component={Tela1} />
          <Tab.Screen name="Tela2" component={Tela2} />
          <Tab.Screen name="Tela3" component={Tela3} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
