import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

/* Prop de route para acesso dos dados trafegados
entre a nagegação entre as telas/rotas */
const Detalhes = ({ route }) => {
  console.log(route);
  /* Extraindo dos parametros da rota os 
  dados o objeto filme*/
  const { filme } = route.params;
  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <ImageBackground
          style={estilos.imagem}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`, // ||
            //`http://via.placeholder.com/300`,
          }}
        >
          <Text style={estilos.titulo}>{filme.title}</Text>
        </ImageBackground>

        <View style={estilos.conteudo}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text>
              Avaliação: {filme.vote_average} | Lançamento: {filme.release_date}
            </Text>
            <Text style={estilos.descricao}>
              {filme.overview || "Sem descrição"}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detalhes;

const estilos = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  imagem: {
    height: 200,
    justifyContent: "center",
  },
  conteudo: {
    flex: 1 /* necessário para o scrollview funcionar */,
    padding: 16,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 8,
  },
  titulo: {
    backgroundColor: "rgba(0,0,0, 0.75)",
    color: "white",
    textAlign: "center",
    padding: 16,
  },
  /* aplicando aqui pois no IOS não funciona direto na 
  SafeAreaView */
});
