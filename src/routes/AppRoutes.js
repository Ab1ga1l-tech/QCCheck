import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoteListScreen from "../screens/LoteListScreen";
import InspectionScreen from "../screens/InspectionScreen";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

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

      </Stack.Navigator>
    </NavigationContainer>
  );
}