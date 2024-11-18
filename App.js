const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import Recuperacao from "./screens/Recuperacao";
import GeradorPrincipal from "./screens/GeradorPrincipal";
import ReciladorPrincipal from "./screens/ReciladorPrincipal";
import RelatorioFiltrarGerador from "./screens/RelatorioFiltrarGerador";
import RelatorioFiltrar from "./screens/RelatorioFiltrar";
import GeradorRecilador from "./screens/GeradorRecilador";
import ResiduosGerador from "./screens/ResiduosGerador";
import Residuos from "./screens/Residuos";
import Relatorio from "./screens/Relatorio";
import ReciladorGerador from "./screens/ReciladorGerador";
import ComprarResiduos from "./screens/ComprarResiduos";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recuperacao"
              component={Recuperacao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GeradorPrincipal"
              component={GeradorPrincipal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReciladorPrincipal"
              component={ReciladorPrincipal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RelatorioFiltrarGerador"
              component={RelatorioFiltrarGerador}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RelatorioFiltrar"
              component={RelatorioFiltrar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GeradorRecilador"
              component={GeradorRecilador}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResiduosGerador"
              component={ResiduosGerador}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Residuos"
              component={Residuos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Relatorio"
              component={Relatorio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReciladorGerador"
              component={ReciladorGerador}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ComprarResiduos"
              component={ComprarResiduos}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
