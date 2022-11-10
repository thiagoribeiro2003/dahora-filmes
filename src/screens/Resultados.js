import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Resultados = ({ route }) => {
  /* Usamos a proproute (do React Navigation) para
  acessar os parâmetros desta rota de navegação e extrair
  os dados (neste casom filme) enviados para esta tela Resultados */
  const { filme } = route.params;

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
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
