import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
// import apiKey from "../../apiKey";
import apiKey from "../../apiKey";
import Loading from "../components/Loading";
import CardFilme from "../components/CardFilme";
import ItemSeparador from "../components/ItemSeparador";
import ItemVazio from "../components/ItemVazio";

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
      <Text style={estilos.nomeBusca}>
        Você buscou por: <Text style={estilos.teste}>{filme}</Text>
      </Text>

      {loading && <Loading />}

      <View style={estilos.viewFilmes}>
        {!loading && (
          <FlatList
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={ItemVazio}
            data={resultados}
            renderItem={({ item }) => {
              return (
                <View>
                  <CardFilme filme={item} />
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        )}
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
  teste: {
    fontSize: 15,
    fontWeight: "bold",
  },
  nomeBusca: {
    marginBottom: 20,
  },
});
