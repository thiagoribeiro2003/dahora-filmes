import { StyleSheet, Text, View } from "react-native";
import React from "react";

/* Prop de route para acesso dos dados trafegados
entre a nagegação entre as telas/rotas */
const Detalhes = ({ route }) => {
  console.log(route);
  /* Extraindo dos parametros da rota os 
  dados o objeto filme*/
  const { filme } = route.params;
  return (
    <View>
      <Text>Detalhes</Text>
    </View>
  );
};

export default Detalhes;

const estilos = StyleSheet.create({});
