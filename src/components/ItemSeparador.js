import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ItemSeparador = () => {
  return (
    <View style={estilos.viewSeparador}>
      <View style={estilos.linha}></View>
    </View>
  );
};

export default ItemSeparador;
const estilos = StyleSheet.create({
  viewSeparador: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16,
  },
  linha: {
    backgroundColor: "gray",
    height: 2,
    width: "80%",
  },
});
