import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
} from "../GlobalStyles";

const Recuperacao = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recuperacao}>
      <View style={styles.recuperacaoChild} />
      <View style={[styles.inputemailrecuperacao, styles.butonSpaceBlock]}>
        <Image
          style={styles.inputemailrecuperacaoChild}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={styles.email}>Email</Text>
      </View>
      <Pressable
        style={[styles.buton, styles.butonSpaceBlock]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.iniciarRecuperao, styles.recicleCertoTypo]}>
          Iniciar Recuperação
        </Text>
      </Pressable>
      <Text style={[styles.recicleCerto, styles.recicleCertoTypo]}>
        Recicle Certo
      </Text>
      <Text style={[styles.esqueceuSuaSenha, styles.esqueceuSuaSenhaPosition]}>
        Esqueceu sua senha?
      </Text>
      <Text style={[styles.preenchaSeuEmail, styles.esqueceuSuaSenhaPosition]}>
        Preencha seu email no campo abaixo e nós iremos enviar um link de
        recuperação de senha para o mesmo!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  butonSpaceBlock: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    position: "absolute",
  },
  recicleCertoTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  esqueceuSuaSenhaPosition: {
    left: 385,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  recuperacaoChild: {
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
  inputemailrecuperacaoChild: {
    width: 347,
    height: 1,
  },
  email: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  inputemailrecuperacao: {
    top: 396,
    left: 28,
    width: 357,
    height: 46,
    alignItems: "flex-end",
    gap: Gap.gap_md,
    backgroundColor: Color.colorWhite,
  },
  iniciarRecuperao: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  buton: {
    top: 289,
    left: 72,
    width: 269,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorPrincipal,
    borderRadius: Border.br_5xl,
  },
  recicleCerto: {
    marginLeft: 143,
    top: 881,
    left: "50%",
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    width: 285,
    height: 47,
    position: "absolute",
  },
  esqueceuSuaSenha: {
    top: 650,
    fontSize: FontSize.size_13xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  preenchaSeuEmail: {
    top: 600,
    fontSize: FontSize.size_xl,
    width: 331,
    height: 101,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 385,
  },
  recuperacao: {
    flex: 1,
    width: "100%",
    height: 917,
    overflow: "hidden",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xl,
  },
});

export default Recuperacao;
