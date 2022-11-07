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
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    width: "80%",
    backgroundColor: "green",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    backgroundColor: "orange",
    width: "80%",
  },
  viewRodape: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "red",
    width: "80%",
  },
});
