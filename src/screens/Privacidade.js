import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Privacidade = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView>
        <Text style={estilos.titulo}>
          Política de Privacidade para o app Dáhora Filmes
        </Text>

        <Text style={estilos.texto}>
          A sua privacidade é importante para nós. É política do Dá Hora Filmes
          respeitar a sua privacidade em relação a qualquer informação sua que
          possamos coletar no site Dá Hora Filmes, e outros sites que possuímos
          e operamos.
        </Text>

        <Text style={estilos.texto}>
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
        </Text>

        <Text style={estilos.texto}>
          Apenas retemos as informações coletadas pelo tempo necessário para
          fornecer o serviço solicitado. Quando armazenamos dados, protegemos
          dentro de meios comercialmente aceitáveis ​​para evitar perdas e
          roubos, bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </Text>

        <Text style={estilos.texto}>
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei.
        </Text>

        <Text style={estilos.texto}>
          O nosso site pode ter links para sites externos que não são operados
          por nós. Esteja ciente de que não temos controle sobre o conteúdo e
          práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas políticas de privacidade.
        </Text>

        <Text style={estilos.texto}>
          Você é livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados.
        </Text>
        <Text style={estilos.texto}>
          O uso continuado de nosso site será considerado como aceitação de
          nossas práticas em torno de privacidade e informações pessoais. Se
          você tiver alguma dúvida sobre como lidamos com dados do usuário e
          informações pessoais, entre em contato conosco.
        </Text>
        <Text style={estilos.subtitulo}>Compromisso do Usuário</Text>
        <Text style={estilos.texto}>
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que o Dá Hora Filmes oferece no site e com caráter
          enunciativo, mas não limitativo:
        </Text>
        <Text style={estilos.texto}>
          A) Não se envolver em atividades que sejam ilegais ou contrárias à boa
          fé a à ordem pública;
        </Text>
        <Text style={estilos.texto}>
          B) Não difundir propaganda ou conteúdo de natureza racista,
          xenofóbica, ou casas de apostas online, jogos de sorte e azar,
          qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou
          contra os direitos humanos;
        </Text>
        <Text style={estilos.texto}>
          C) Não causar danos aos sistemas físicos (hardwares) e lógicos
          (softwares) do Dá Hora Filmes, de seus fornecedores ou terceiros, para
          introduzir ou disseminar vírus informáticos ou quaisquer outros
          sistemas de hardware ou software que sejam capazes de causar danos
          anteriormente mencionados.
        </Text>
        <Text style={estilos.subtitulo}>Mais informações</Text>
        <Text style={estilos.texto}>
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se
          houver algo que você não tem certeza se precisa ou não, geralmente é
          mais seguro deixar os cookies ativados, caso interaja com um dos
          recursos que você usa em nosso site.
        </Text>
        <Text style={estilos.texto}>
          Esta política é efetiva a partir de Nov/2022.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Privacidade;

const estilos = StyleSheet.create({
  titulo: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 8,
  },
  subtitulo: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 8,
  },
  texto: {
    marginVertical: 8,
  },
});
