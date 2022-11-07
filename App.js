import { useFonts } from "expo-font";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import logo from "./assets/images/logo.png";

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
        <Button title="Buscar Filmes" />
        <Button title="Favoritos" />
      </View>

      <View style={estilos.viewRodape}>
        <Button title="Privacidade" />
        <Button title="Sobre" />
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
    width: 256,
    height: 256,
  },
  tituloApp: {
    fontSize: 32,
    fontFamily: "monoton",
    color: "#5154a6",
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
  viewRodape: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});
