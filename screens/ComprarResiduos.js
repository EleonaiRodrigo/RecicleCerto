import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const ComprarResiduos = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.comprarresiduos}>
      <View style={styles.comprarresiduosChild} />
      <Text style={[styles.condVidaSol, styles.sair1FlexBox]}>
        COND. VIDA SOL
      </Text>
      <View style={[styles.buton, styles.butonFlexBox]}>
        <Text style={styles.comprarResduos}>Comprar Resíduos</Text>
      </View>
      <Text style={[styles.recicleCerto, styles.salvarTypo]}>
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
        onPress={() => navigation.navigate("ReciladorGerador")}
      >
        <Text style={[styles.voltar1, styles.sair1FlexBox]}>Voltar</Text>
      </Pressable>
      <Text style={[styles.papel, styles.papelTypo]}>Papel</Text>
      <Text style={[styles.papelo, styles.papelTypo]}>Papelão</Text>
      <Text style={[styles.plstico, styles.papelTypo]}>Plástico</Text>
      <Text style={[styles.latinha, styles.papelTypo]}>Latinha</Text>
      <View style={[styles.inputquantpapel, styles.inputquantpapelLayout]} />
      <Text style={[styles.text, styles.textTypo1]}>0,00</Text>
      <View style={[styles.inputvalorpapel, styles.inputquantpapelLayout]} />
      <View
        style={[styles.inputquantpapelao, styles.inputquantpapelaoLayout]}
      />
      <View
        style={[styles.inputvalorpapelao, styles.inputquantpapelaoLayout]}
      />
      <View
        style={[styles.inputquantlatinha, styles.inputquantlatinhaLayout]}
      />
      <View
        style={[styles.inputvalorlatinha, styles.inputquantlatinhaLayout]}
      />
      <View
        style={[styles.inputquantplastico, styles.inputquantplasticoLayout]}
      />
      <View
        style={[styles.inputvalorplastico, styles.inputquantplasticoLayout]}
      />
      <Text style={[styles.quantidadeKg, styles.quantidadeKgTypo]}>
        Quantidade Kg
      </Text>
      <Text style={[styles.valorUnitrio, styles.quantidadeKgTypo]}>
        Valor unitário
      </Text>
      <Pressable
        style={[styles.buton1, styles.butonFlexBox]}
        onPress={() => navigation.navigate("ReciladorPrincipal")}
      >
        <Text style={[styles.salvar, styles.salvarTypo]}>Salvar</Text>
      </Pressable>
      <Text style={[styles.r000, styles.textTypo1]}>R$ 0,00</Text>
      <Text style={[styles.text1, styles.textTypo1]}>0,00</Text>
      <Text style={[styles.r0001, styles.textTypo1]}>R$ 0,00</Text>
      <Text style={[styles.text2, styles.text2Typo]}>0,00</Text>
      <Text style={[styles.r0002, styles.text2Typo]}>R$ 0,00</Text>
      <Text style={[styles.text3, styles.textTypo]}>0,00</Text>
      <Text style={[styles.r0003, styles.r0003Typo]}>R$ 0,00</Text>
      <Text style={[styles.total, styles.totalPosition]}>Total =</Text>
      <View style={[styles.inputquanttotal, styles.inputquanttotalLayout]} />
      <View style={[styles.inputvalortotal, styles.inputquanttotalLayout]} />
      <Text style={[styles.text4, styles.totalPosition]}>0,00</Text>
      <Text style={[styles.r0004, styles.totalPosition]}>R$ 0,00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sair1FlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
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
    position: "absolute",
  },
  salvarTypo: {
    color: Color.colorWhite,
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
  papelTypo: {
    left: 381,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
  },
  inputquantpapelLayout: {
    height: 43,
    width: 107,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    top: 560,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  textTypo1: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  inputquantpapelaoLayout: {
    top: 476,
    height: 43,
    width: 107,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  inputquantlatinhaLayout: {
    top: 308,
    height: 43,
    width: 107,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  inputquantplasticoLayout: {
    top: 392,
    height: 43,
    width: 107,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  quantidadeKgTypo: {
    top: 583,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text2Typo: {
    top: 379,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  textTypo: {
    left: 224,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  r0003Typo: {
    left: 104,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  totalPosition: {
    top: 211,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  inputquanttotalLayout: {
    top: 224,
    height: 43,
    width: 107,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  comprarresiduosChild: {
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
  condVidaSol: {
    top: 743,
    left: 283,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  comprarResduos: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
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
    left: "50%",
    width: 412,
  },
  recicleCerto: {
    marginLeft: 143,
    top: 881,
    fontSize: FontSize.size_17xl,
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
  },
  sair: {
    left: 107,
  },
  voltar1: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  voltar: {
    left: 339,
  },
  papel: {
    top: 546,
    textAlign: "left",
    color: Color.colorBlack,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  papelo: {
    top: 462,
    textAlign: "left",
    color: Color.colorBlack,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  plstico: {
    top: 378,
    textAlign: "left",
    color: Color.colorBlack,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  latinha: {
    top: 294,
    textAlign: "left",
    color: Color.colorBlack,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  inputquantpapel: {
    left: 264,
  },
  text: {
    left: 225,
    top: 546,
  },
  inputvalorpapel: {
    left: 133,
  },
  inputquantpapelao: {
    left: 264,
  },
  inputvalorpapelao: {
    left: 133,
  },
  inputquantlatinha: {
    left: 263,
  },
  inputvalorlatinha: {
    left: 132,
  },
  inputquantplastico: {
    left: 264,
  },
  inputvalorplastico: {
    left: 133,
  },
  quantidadeKg: {
    left: 259,
  },
  valorUnitrio: {
    left: 122,
  },
  salvar: {
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    textAlign: "left",
  },
  buton1: {
    top: 92,
    left: 72,
    backgroundColor: Color.colorMediumslateblue,
    width: 269,
    height: 42,
    borderRadius: Border.br_5xl,
  },
  r000: {
    left: 105,
    top: 546,
  },
  text1: {
    left: 225,
    top: 462,
  },
  r0001: {
    left: 105,
    top: 462,
  },
  text2: {
    left: 225,
  },
  r0002: {
    left: 105,
  },
  text3: {
    top: 295,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  r0003: {
    top: 295,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  total: {
    left: 381,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
  },
  inputquanttotal: {
    left: 263,
  },
  inputvalortotal: {
    left: 132,
  },
  text4: {
    left: 224,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  r0004: {
    left: 104,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  comprarresiduos: {
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

export default ComprarResiduos;
