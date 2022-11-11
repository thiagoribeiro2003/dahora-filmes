import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import apiKey from "../../apiKey";

const Resultados = ({ route }) => {
  /* Usamos a proproute (do React Navigation) para
  acessar os parâmetros desta rota de navegação e extrair
  os dados (neste casom filme) enviados para esta tela Resultados. */
  const { filme } = route.params;

  const [resultados, setResultados] = useState([]);

  /* useEffect: hook do React que executa operações no momento 
  em que o componente (neste caso, Resultado) é renderizado. */
  useEffect(() => {
    /* Assim que entrarmos em Resultado, é executada a função
     async buscarFilmes que por sua vez através do axios executa 
     a consulta à API baseado no quefoi digitado. */
    async function buscarFilmes() {
      try {
        /* Aguardamos a resposta da consulta get ao endpoint 
        "/search/movie da api. Observe que este endpoint precisa
         de parâmetros para a execução correta em consulta. Estes parâmetros
         Devem ter o mesmo nome indicado na documentação do endpoint/API */
        const resposta = await api.get("/search/movie", {
          params: {
            api_key: apiKey,
            language: "pt-BR",
            query: filme,
            include_adult: false,
          },
        });

        setResultados(resposta.data.results);
      } catch (error) {
        console.log("Deu ruim na busca da API: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  console.log(resultados);

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
      <View style={estilos.viewFilmes}>
        {resultados.map((resultado) => {
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
