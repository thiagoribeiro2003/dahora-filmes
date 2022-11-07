import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Text>Dá hora filmes</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Button title="Buscar Filmes" />
        <Button title="Favoritos" />
      </View>

      <View style={estilos.viewRodape}>
        <Button title="Privacidade" />
        <Button title="Sobre" />
      </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    width: "80%",
    backgroundColor: "green",
    textAlign: "center",
  },
  viewBotoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "orange",
    width: "80%",
  },
  viewRodape: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "red",
    width: "80%",
  },
});
