import { useFonts } from "expo-font";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import logo from "./assets/images/logo.png";

const corPrimaria = "#5451a6";

const App = () => {
  const [fonteCarregada] = useFonts({
    monoton: require("./assets/fonts/Monoton-Regular.ttf"),
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
        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textoBotao}>Buscar Filmes</Text>
        </Pressable>

        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textoBotao}>Favoritos</Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable>
          <Text style={estilos.textoRodape}>Privacidade</Text>
        </Pressable>
        <Pressable>
          <Text style={estilos.textoRodape}>Sobre</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    /* width: 128,
    height: 128, */
    width: 186,
    height: 186,
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
    flex: 0.5,
    backgroundColor: corPrimaria,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});
