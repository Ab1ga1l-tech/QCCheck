import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import LoteListScreen from "../screens/LoteListScreen";
import InspectionScreen from "../screens/InspectionScreen";
import EditLoteScreen from "../screens/EditarLoteScreen";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#c2ccc2",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Lotes"
          component={LoteListScreen}
          options={{ title: "QCCheck" }}
        />

        <Stack.Screen
          name="NovoLote"
          component={InspectionScreen}
          options={{ title: "Novo Lote" }}
        />

        <Stack.Screen
          name="EditarLote"
          component={EditLoteScreen}
          options={{ title: "Editar Lote" }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}