import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const GeradorRecilador = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.geradorrecilador}>
      <View style={styles.geradorreciladorChild} />
      <Text style={[styles.selecioneOReciclador, styles.sair1FlexBox]}>
        Selecione o Reciclador
      </Text>
      <Pressable
        style={[styles.buton, styles.butonPosition]}
        onPress={() => navigation.navigate("ResiduosGerador")}
      >
        <Text style={[styles.reciclelimpe, styles.reciclelimpeTypo]}>
          RECICLELIMPE
        </Text>
      </Pressable>
      <Text style={[styles.recicleCerto, styles.reciclelimpeTypo]}>
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
        onPress={() => navigation.navigate("GeradorPrincipal")}
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
  reciclelimpeTypo: {
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
  geradorreciladorChild: {
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
  selecioneOReciclador: {
    top: 743,
    left: 313,
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
  reciclelimpe: {
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
  geradorrecilador: {
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

export default GeradorRecilador;
