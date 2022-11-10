import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const FormBusca = ({ navigation }) => {
  /* state para o filme que será buscado */
  const [filme, setFilme] = useState("");

  const capturarDigitacao = (valor) => {
    setFilme(valor);
  };

  const inputTexto = () => {
    if (!filme) {
      return Alert.alert("Ops!", "Você deve digitar o nome de um filme");
    }

    /* Usamos a prop navigation (que vem do React Navigation 
      programado no App) para acessar uma nova tela (no caso,
      Resultados). Para esta tela, passamos como objeto os dados
      digitados no formulário (neste caso, filme). */
    navigation.navigate("Resultados", { filme });
  };

  return (
    <SafeAreaView>
      <Text style={estilos.textoBusca1}>Aventura? Terror? Suspense? Ação?</Text>
      <Text style={estilos.textoBusca2}>
        Localize um filme que você viu ou gostaria de ver!
      </Text>

      <View style={estilos.areaBusca}>
        <MaterialIcons
          style={estilos.icone}
          name="local-movies"
          size={50}
          color="black"
        />
        <TextInput
          style={estilos.inputBusca}
          onChangeText={capturarDigitacao}
          placeholder="Filme..."
        />
      </View>

      <View style={estilos.botaoBusca}>
        <Button title="Procurar" color="#5451a6" onPress={inputTexto} />
      </View>
    </SafeAreaView>
  );
};

export default FormBusca;

const estilos = StyleSheet.create({
  textoBusca1: {
    marginTop: 30,
    margin: 15,
    textAlign: "left",
  },
  textoBusca2: {
    margin: 15,
    marginTop: 7,
    textAlign: "left",
  },
  areaBusca: {
    flexDirection: "row",
  },
  inputBusca: {
    height: 40,
    width: "80%",
    margin: 15,
    marginLeft: 5,
    borderWidth: 1,
    padding: 10,
  },
  botaoBusca: {
    margin: 15,
  },
  icone: {
    margin: 6,
  },
});
