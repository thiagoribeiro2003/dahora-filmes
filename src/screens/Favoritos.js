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

  const excluirUmfavorito = async (indice) => {
    // Alert.alert(`Excluir filme no índice: ${indice}`);

    /* Etapas para exclusão do filme escolhido */

    // 1) Conhecendo o índice, remover o elemento (filme do array listaFavoritos)

    /* splice: indicamos o indice de referência (na prática, o índice do filme
      que queremos remocer e, a partir deste indice, a quantidade de elementos
      que queremos remover. Como aqui queremos apagar somente o próprio filme 
      escolhido, passamos 1) */

    listaFavoritos.splice(indice, 1);

    // 2) Atualizar o storage com a lista atualizada (ou seja, sem o filme)
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaFavoritos));

    // 3) Recarregar do storage a nova lista de favoritos
    /* Obs.: é necessário transformar em array/objetos antes de manipular 
    na aplicação*/
    const listaDeFilmes = JSON.parse(await AsyncStorage.getItem("@favoritos"));

    // 4) Atualizar o state para um novo render na tela com a lista de favoritos
    setListaFavoritos(listaDeFilmes);
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
            {listaFavoritos.map((filmeFavorito, indice) => {
              return (
                <Pressable key={filmeFavorito.id} style={estilos.itemFilme}>
                  <Text style={estilos.titulo}>{filmeFavorito.title}</Text>
                  <Pressable
                    style={estilos.botaoExcluir}
                    //onPress={excluirUmfavorito}
                    onPress={() => excluirUmfavorito(indice)}
                    //onPress={excluirUmfavorito.bind(this, indice)}
                  >
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
    backgroundColor: "white",
  },
  itemFilme: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f4f4f4",
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
