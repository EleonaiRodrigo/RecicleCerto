import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ReciladorGerador = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.reciladorgerador}>
      <View style={styles.reciladorgeradorChild} />
      <Text style={[styles.selecioneOGerador, styles.sair1FlexBox]}>
        Selecione o Gerador
      </Text>
      <Pressable
        style={[styles.buton, styles.butonPosition]}
        onPress={() => navigation.navigate("ComprarResiduos")}
      >
        <Text style={[styles.condVidaSol, styles.condVidaSolTypo]}>
          COND. VIDA SOL
        </Text>
      </Pressable>
      <Text style={[styles.recicleCerto, styles.condVidaSolTypo]}>
        Recicle Certo
      </Text>
      <Pressable
        style={[styles.sair, styles.sairPosition]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.sair1, styles.sair1FlexBox]}>Sair</Text>
      </Pressable>
      <Pressable
        style={[styles.voltar, styles.sairPosition]}
        onPress={() => navigation.navigate("ReciladorPrincipal")}
      >
        <Text style={[styles.voltar1, styles.sair1FlexBox]}>Voltar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sair1FlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  butonPosition: {
    left: "50%",
    position: "absolute",
  },
  condVidaSolTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  sairPosition: {
    top: 48,
    position: "absolute",
  },
  reciladorgeradorChild: {
    top: 917,
    left: 412,
    backgroundColor: Color.colorPrincipal,
    width: 412,
    height: 119,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  selecioneOGerador: {
    top: 743,
    left: 300,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  condVidaSol: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorBlack,
  },
  buton: {
    marginLeft: -183,
    top: 547,
    backgroundColor: Color.colorGainsboro,
    width: 367,
    height: 81,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    borderRadius: Border.br_5xl,
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
  },
  sair1: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  sair: {
    left: 107,
  },
  voltar1: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  voltar: {
    left: 339,
  },
  reciladorgerador: {
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
    borderRadius: Border.br_5xl,
  },
});

export default ReciladorGerador;
