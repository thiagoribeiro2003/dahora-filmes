import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";

import logo from "../../assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";

const corPrimaria = "#5451a6";

const Home = ({ navigation }) => {
  const [fonteCarregada] = useFonts({
    monoton: require("../../assets/fonts/Monoton-Regular.ttf"),
  });

  /* A condicional abaixo serve apenas para dar um pequeno
  tempo suficiente para o carregamento do arquivo de fonte 
  antes do return do componente */
  if (!fonteCarregada) return <Text>Fonte sendo carregada</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Image style={estilos.logo} source={logo} />
        <Text style={estilos.tituloApp}>Dá hora filmes</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Pressable
          style={estilos.botaoInicial}
          onPress={() => {
            navigation.navigate("FormBusca");
          }}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="search" size={16} color="#cccc" /> Buscar Filmes
          </Text>
        </Pressable>

        <Pressable
          style={estilos.botaoInicial}
          onPress={() => {
            navigation.navigate("Favoritos");
          }}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="star" size={16} color="gold" /> Favoritos
          </Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable
          style={estilos.botaoRodape}
          onPress={() => {
            navigation.navigate("Privacidade");
          }}
        >
          <Text style={estilos.textoRodape}>
            <Ionicons name="lock-closed" size={20} color="#cccc" /> Privacidade
          </Text>
        </Pressable>

        <Pressable
          style={estilos.botaoRodape}
          onPress={() => {
            navigation.navigate("Sobre");
          }}
        >
          <Text style={estilos.textoRodape}>
            <Ionicons name="information-circle" size={20} color="#cccc" /> Sobre
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 128,
    height: 128,
    /* width: 150,
    height: 150,*/
  },
  tituloApp: {
    fontSize: 32,
    fontFamily: "monoton",
    color: corPrimaria,
    /*fontWeight: "bold",*/
  },
  viewLogo: {
    flex: 3,
    /*width: "80%",*/
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "80%",
  },
  textoBotao: {
    color: "white",
  },
  botaoInicial: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: corPrimaria,
  },
  textoRodape: {
    color: "white",
    padding: 25,
  },
  viewRodape: {
    flex: 0.6,
    backgroundColor: corPrimaria,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});
