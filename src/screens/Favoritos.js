import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
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
    /* Usamos removeintem para apahar somente os dados do @favoritos do nosso*/
    await AsyncStorage.removeItem("@favoritos");

    /* Atualizar o render do componente (removendo da tela os favoritos)*/
    setListaFavoritos([]);
    Alert.alert("Favoritos", "Favoritos excluídos!");
  };

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>Quantidade: {listaFavoritos.length}</Text>
          <Pressable
            style={estilos.botaoExcluirTudo}
            onPress={excluirFavoritos}
          >
            <Text style={estilos.textoExcluirTudo}>
              <Ionicons name="trash-outline" size={16} /> Excluir Tudo
            </Text>
          </Pressable>
        </View>
        <View>
          <ScrollView>
            {listaFavoritos.map((filmeFavorito) => {
              return (
                <Pressable key={filmeFavorito.id} style={estilos.itemFilme}>
                  <Text style={estilos.titulo}>{filmeFavorito.title}</Text>
                  <Pressable style={estilos.botaoExcluir}>
                    <Ionicons name="trash" size={24} color="white" />
                  </Pressable>
                </Pressable>
              );
            })}
          </ScrollView>
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
    backgroundColor: "#c0392B",
    padding: 12,
    borderRadius: 4,
  },
  cabecalho: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoExcluirTudo: {
    borderWidth: 1,
    borderColor: "#c0392B",
    padding: 8,
    borderRadius: 4,
  },
  textoExcluirTudo: {
    color: "red",
  },
  titulo: {
    flex: 1,
    fontSize: 14,
  },
});
