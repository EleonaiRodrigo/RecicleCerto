import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ResiduosGerador = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.residuosgerador}>
      <View style={styles.residuosgeradorChild} />
      <Text style={[styles.sejaBemVindo, styles.sair1Typo]}>
        Seja bem vindo, Gerador.
      </Text>
      <View style={[styles.buton, styles.butonPosition]}>
        <Text style={[styles.tabelaDePreos, styles.latinhaTypo]}>
          Tabela de Preços
        </Text>
      </View>
      <Text style={[styles.recicleCerto, styles.latinhaTypo]}>
        Recicle Certo
      </Text>
      <Pressable
        style={[styles.sair, styles.sairPosition]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.sair1Typo}>Sair</Text>
      </Pressable>
      <Pressable
        style={[styles.voltar, styles.sairPosition]}
        onPress={() => navigation.navigate("GeradorPrincipal")}
      >
        <Text style={styles.sair1Typo}>Voltar</Text>
      </Pressable>
      <Text style={[styles.papel, styles.papelTypo]}>Papel</Text>
      <Text style={[styles.r010, styles.r010Typo]}>R$ 0,10 / kg</Text>
      <Text style={[styles.papelo, styles.r005Position]}>Papelão</Text>
      <Text style={[styles.r005, styles.r005Position]}>R$ 0,05 / kg</Text>
      <Text style={[styles.plstico, styles.r025Position]}>Plástico</Text>
      <Text style={[styles.r025, styles.r025Position]}>R$ 0,25 / kg</Text>
      <Text style={[styles.latinha, styles.r190Position]}>Latinha</Text>
      <Text style={[styles.r190, styles.r190Position]}>R$ 1,90 / kg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sair1Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  butonPosition: {
    left: "50%",
    position: "absolute",
  },
  latinhaTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  sairPosition: {
    top: 48,
    position: "absolute",
  },
  papelTypo: {
    left: 381,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  r010Typo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  r005Position: {
    top: 479,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  r025Position: {
    top: 395,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  r190Position: {
    top: 311,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  residuosgeradorChild: {
    top: 917,
    left: 412,
    backgroundColor: Color.colorPrincipal,
    height: 119,
    width: 412,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  sejaBemVindo: {
    top: 743,
    left: 325,
    position: "absolute",
  },
  tabelaDePreos: {
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  buton: {
    marginLeft: -206,
    top: 606,
    backgroundColor: Color.colorDarkgray,
    height: 85,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    width: 412,
  },
  recicleCerto: {
    marginLeft: 143,
    top: 881,
    fontSize: FontSize.size_17xl,
    color: Color.colorWhite,
    textAlign: "center",
    width: 285,
    height: 47,
    left: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  sair: {
    left: 107,
  },
  voltar: {
    left: 339,
  },
  papel: {
    top: 563,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  r010: {
    left: 156,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 563,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  papelo: {
    left: 381,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  r005: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 156,
  },
  plstico: {
    left: 381,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  r025: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 156,
  },
  latinha: {
    left: 377,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  r190: {
    left: 152,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  residuosgerador: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 917,
    overflow: "hidden",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
});

export default ResiduosGerador;
