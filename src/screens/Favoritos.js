import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);
  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const dados = await AsyncStorage.getItem("@favoritos");
        const filmes = JSON.parse(dados);
        if (dados != null) {
          setListaFavoritos(filmes);
        }
      } catch (error) {
        console.log("Deu ruim no carregamento: " + error.message);
      }
    }

    carregarFavoritos();
  }, []);

  const excluirFavoritos = async () => {
    await AsyncStorage.removeItem("@favoritos");
    setListaFavoritos([]);
  };

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <Text>Quantidade: {listaFavoritos.length}</Text>
        <Button title="Excluir favoritos" onPress={excluirFavoritos} />
        <View>
          {listaFavoritos.map((filmeFavorito) => {
            return (
              <Pressable key={filmeFavorito.id} style={estilos.itemFilme}>
                <Text>{filmeFavorito.title}</Text>
                <Pressable style={estilos.botaoExcluir}>
                  <Ionicons name="trash" size={24} color="white" />
                </Pressable>
              </Pressable>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;

const estilos = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 8,
  },
  itemFilme: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
    alignItems: "center",
  },
  botaoExcluir: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 4,
  },
});
