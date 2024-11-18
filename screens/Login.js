import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Gap,
  Padding,
  Color,
  FontFamily,
  FontSize,
  Border,
} from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.loginChild} />
      <Text style={styles.entrar}>Entrar</Text>
      <View style={[styles.inputsenha, styles.inputsenhaFlexBox]}>
        <Image
          style={styles.childLayout}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={styles.senhaTypo}>Senha</Text>
      </View>
      <View style={[styles.inputemail, styles.inputsenhaFlexBox]}>
        <Image
          style={styles.childLayout}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={styles.senhaTypo}>Email</Text>
      </View>
      <Pressable
        style={styles.buton}
        onPress={() => navigation.navigate("GeradorPrincipal")}
      >
        <Text style={[styles.acessar, styles.acessarTypo]}>Acessar</Text>
      </Pressable>
      <Text style={[styles.recicleCerto, styles.acessarTypo]}>
        Recicle Certo
      </Text>
      <Pressable
        style={styles.esqueceuASenhaContainer}
        onPress={() => navigation.navigate("Recuperacao")}
      >
        <Text style={styles.esqueceuASenha}>Esqueceu a senha?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputsenhaFlexBox: {
    gap: Gap.gap_md,
    alignItems: "flex-end",
    height: 46,
    width: 357,
    left: 28,
    padding: Padding.p_3xs,
    justifyContent: "center",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  acessarTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  loginChild: {
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
  entrar: {
    top: 668,
    left: 252,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  childLayout: {
    height: 1,
    width: 347,
  },
  senhaTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  inputsenha: {
    top: 449,
  },
  inputemail: {
    top: 539,
  },
  acessar: {
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
    padding: Padding.p_3xs,
    justifyContent: "center",
    backgroundColor: Color.colorPrincipal,
    position: "absolute",
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
  esqueceuASenha: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  esqueceuASenhaContainer: {
    left: 177,
    top: 429,
    position: "absolute",
  },
  login: {
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

export default Login;
