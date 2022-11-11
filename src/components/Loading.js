import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View style={estilos.viewLoading}>
      <ActivityIndicator size={80} color="#5451a6" />
    </View>
  );
};

export default Loading;

const estilos = StyleSheet.create({
  viewLoading: {
    flex: 1,
    justifyContent: "center",
  },
});
