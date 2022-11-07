import { StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={estilos.viewLogo}>
      <Text>App</Text>
    </View>
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
    backgroundColor: "green",
    textAlign: "center",
  },
});
