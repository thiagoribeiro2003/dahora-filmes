import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import apiKey from "../../apiKey";
import Loading from "../components/Loading";

const Resultados = ({ route }) => {
  const { filme } = route.params;

  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get("/search/movie", {
          params: {
            api_key: apiKey,
            language: "pt-BR",
            query: filme,
            include_adult: false,
          },
        });

        setResultados(resposta.data.results);

        /* Simulando um tempo de carregamento lento
        usando temporizador setInterval (uma função javascript*/
        setInterval(() => {
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.log("Deu ruim na busca da API: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  /* if (loading) return <Loading />; */

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>

      {/* Sintaxe de if evaluate usando && 
    Se loading for TRUE, renderize <Loading /> */}
      {loading && <Loading />}

      <View style={estilos.viewFilmes}>
        {!loading &&
          resultados.map((resultado) => {
            return <Text key={resultado.id}>{resultado.title}</Text>;
          })}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
