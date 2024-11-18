import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const RelatorioFiltrarGerador = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.relatoriofiltrargerador}>
      <View style={styles.relatoriofiltrargeradorChild} />
      <Text
        style={[styles.relatrioDeTransaes, styles.sair1FlexBox]}
      >{`Relatório de transações `}</Text>
      <Text style={styles.recicleCerto}>Recicle Certo</Text>
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
      <View style={[styles.inputdatainicial, styles.butonfiltrarSpaceBlock]}>
        <Text style={[styles.dataInicial, styles.dataPosition]}>
          Data inicial
        </Text>
      </View>
      <View style={[styles.inputdatafinal, styles.butonfiltrarSpaceBlock]}>
        <Text style={[styles.dataFinal, styles.dataPosition]}>{`Data final
`}</Text>
      </View>
      <View style={[styles.butonfiltrar, styles.butonfiltrarSpaceBlock]}>
        <Text style={styles.filtrar}>Filtrar</Text>
      </View>
      <Text style={[styles.papel, styles.papelTypo]}>Papel</Text>
      <Text style={[styles.papelo, styles.text1Position]}>Papelão</Text>
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
      <Text style={[styles.r000, styles.textTypo1]}>R$ 0,00</Text>
      <Text style={[styles.text1, styles.textTypo1]}>0,00</Text>
      <Text style={[styles.r0001, styles.textTypo1]}>R$ 0,00</Text>
      <Text style={[styles.text2, styles.text2Typo]}>0,00</Text>
      <Text style={[styles.r0002, styles.text2Typo]}>R$ 0,00</Text>
      <Text style={[styles.text3, styles.textTypo]}>0,00</Text>
      <Text style={[styles.r0003, styles.text3Position]}>R$ 0,00</Text>
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
  sairPosition: {
    top: 48,
    position: "absolute",
  },
  butonfiltrarSpaceBlock: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    position: "absolute",
  },
  dataPosition: {
    zIndex: 0,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    marginTop: 8.5,
    top: "50%",
    textAlign: "center",
    left: "50%",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  papelTypo: {
    left: 384,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  text1Position: {
    top: 380,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  inputquantpapelLayout: {
    height: 43,
    width: 107,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    top: 478,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  textTypo1: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  inputquantpapelaoLayout: {
    top: 394,
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
    top: 226,
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
    top: 310,
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
    top: 501,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
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
    top: 297,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
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
    left: 227,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  text3Position: {
    top: 213,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  totalPosition: {
    top: 129,
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
    top: 142,
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
  relatoriofiltrargeradorChild: {
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
  relatrioDeTransaes: {
    top: 743,
    left: 318,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  recicleCerto: {
    marginLeft: 143,
    top: 881,
    fontSize: FontSize.size_17xl,
    width: 285,
    height: 47,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
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
  dataInicial: {
    marginLeft: 41,
  },
  inputdatainicial: {
    marginLeft: 9,
    alignItems: "flex-end",
    height: 62,
    width: 136,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: "50%",
    marginTop: 131.5,
    justifyContent: "center",
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  dataFinal: {
    marginLeft: 35,
  },
  inputdatafinal: {
    marginLeft: -145,
    alignItems: "flex-end",
    height: 62,
    width: 136,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: "50%",
    marginTop: 131.5,
    justifyContent: "center",
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  filtrar: {
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  butonfiltrar: {
    top: 532,
    left: 71,
    backgroundColor: Color.colorMediumslateblue,
    width: 269,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_5xl,
  },
  papel: {
    top: 464,
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
    left: 384,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  plstico: {
    top: 296,
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
    top: 212,
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
    left: 267,
  },
  text: {
    left: 228,
    top: 464,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  inputvalorpapel: {
    left: 136,
  },
  inputquantpapelao: {
    left: 267,
  },
  inputvalorpapelao: {
    left: 136,
  },
  inputquantlatinha: {
    left: 266,
  },
  inputvalorlatinha: {
    left: 135,
  },
  inputquantplastico: {
    left: 267,
  },
  inputvalorplastico: {
    left: 136,
  },
  quantidadeKg: {
    left: 262,
  },
  valorUnitrio: {
    left: 125,
  },
  r000: {
    left: 108,
    top: 464,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text1: {
    left: 228,
    top: 380,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  r0001: {
    left: 108,
    top: 380,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text2: {
    left: 228,
  },
  r0002: {
    left: 108,
  },
  text3: {
    top: 213,
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
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 107,
  },
  total: {
    left: 384,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  inputquanttotal: {
    left: 266,
  },
  inputvalortotal: {
    left: 135,
  },
  text4: {
    left: 227,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  r0004: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 107,
  },
  relatoriofiltrargerador: {
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

export default RelatorioFiltrarGerador;
