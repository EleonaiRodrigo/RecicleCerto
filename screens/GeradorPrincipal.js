import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const GeradorPrincipal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.geradorprincipal}>
      <View style={styles.geradorprincipalChild} />
      <Text style={[styles.sejaBemVindo, styles.sair1Typo]}>
        Seja bem vindo, Gerador.
      </Text>
      <Pressable
        style={[styles.buton, styles.butonFlexBox]}
        onPress={() => navigation.navigate("GeradorRecilador")}
      >
        <Text style={[styles.reciladores, styles.resduosTypo]}>
          Reciladores
        </Text>
      </Pressable>
      <Pressable
        style={[styles.buton1, styles.butonFlexBox]}
        onPress={() => navigation.navigate("ResiduosGerador")}
      >
        <Text style={[styles.resduos, styles.resduosTypo]}>Resíduos</Text>
      </Pressable>
      <Pressable
        style={[styles.buton2, styles.butonFlexBox]}
        onPress={() => navigation.navigate("RelatorioFiltrarGerador")}
      >
        <Text style={[styles.relatrios, styles.resduosTypo]}>Relatórios</Text>
      </Pressable>
      <Text style={[styles.recicleCerto, styles.resduosTypo]}>
        Recicle Certo
      </Text>
      <Pressable
        style={styles.sair}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.sair1Typo}>Sair</Text>
      </Pressable>
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
  butonFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 42,
    width: 269,
    marginLeft: -136,
    left: "50%",
    backgroundColor: Color.colorPrincipal,
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  resduosTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  geradorprincipalChild: {
    top: 917,
    left: 412,
    width: 412,
    height: 119,
    backgroundColor: Color.colorPrincipal,
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
  reciladores: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  buton: {
    top: 586,
  },
  resduos: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  buton1: {
    top: 503,
  },
  relatrios: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  buton2: {
    top: 420,
  },
  recicleCerto: {
    marginLeft: 143,
    top: 881,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    width: 285,
    height: 47,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  sair: {
    left: 220,
    top: 48,
    position: "absolute",
  },
  geradorprincipal: {
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

export default GeradorPrincipal;
