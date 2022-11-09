import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const FormBusca = () => {
  return (
    <SafeAreaView>
      <Text style={estilos.textoBusca1}>
        Aventura? Terror? Suspense? Ação?{" "}
      </Text>
      <Text style={estilos.textoBusca2}>
        Localize um filme que você viu ou gostaria de ver!
      </Text>
    </SafeAreaView>
  );
};

export default FormBusca;

const estilos = StyleSheet.create({
  textoBusca1: {
    marginTop: 30,
    margin: 15,
    textAlign: "left",
  },
  textoBusca2: {
    margin: 15,
    marginTop: 10,
    textAlign: "left",
  },
});
