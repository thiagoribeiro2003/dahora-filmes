// importa o AsyncStorage do expo, Não use do react-native padrão
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import fotoAlternativa from "../../assets/images/foto-alternativa.jpg";

const CardFilme = ({ filme }) => {
  /* Acessar recursos do React Navigation (sem props) */
  const navigation = useNavigation();

  const leiaMais = () => {
    //Alert.alert("Vai!", "Detalhes do filme...");
    /* Acrecentar no App na parte de Stack.Screen a página que deseja*/
    navigation.navigate("Detalhes", { filme });
  };

  const salvar = async () => {
    // return Alert.alert("Favoritos", "Salvando");

    /* Etapas para uso do AsyncStorage */

    // 1) Carregamento do storage do aparelho (se houver, caso contrário retorna null)
    const filmesFavoritos = await AsyncStorage.getItem("@favoritos");
    console.log(filmesFavoritos);

    // 2) Havendo storage prévio, transformamos os doados do filme em um objeto e os guardamos nume lista (array)
    let listaDeFilmes = JSON.parse(filmesFavoritos);

    // 3) Se a lista não for indefinida, vamos iniciá-la como um array vazio
    if (!listaDeFilmes) {
      listaDeFilmes = [];
    }

    // 4) Adicionamos os dados do filme na lista (array)
    listaDeFilmes.push(filme);

    // 5) Finalmente, salvamos no storage do dispositivo
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaDeFilmes));
    Alert.alert("Favoritos", "Filme salvo com sucesso!");
  };

  const { title, poster_path } = filme;
  return (
    <View style={estilos.card}>
      <Image
        style={estilos.imagem}
        resizeMode="cover"
        source={
          poster_path
            ? {
                uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
              }
            : fotoAlternativa
        }
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}> {title} </Text>

        <View style={estilos.botoes}>
          <Pressable style={estilos.botao} onPress={leiaMais}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="book" size={12} /> Leia mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao} onPress={salvar}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="add-circle" size={12} /> Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CardFilme;

const estilos = StyleSheet.create({
  card: {
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#5451a6",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagem: {
    flex: 1,
    height: 170,
    width: 100,
  },
  corpo: {
    flex: 2,
  },
  titulo: {
    backgroundColor: "#5451a6",
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  botao: {
    padding: 8,
    borderWidth: 1,
  },
  textoBotao: {
    color: "#5451a6",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
