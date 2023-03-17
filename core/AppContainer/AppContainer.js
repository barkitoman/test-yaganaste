import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ListBanks from "../../screens/listBanks/ListBanks";

const Stack = createStackNavigator();

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        ini
        screenOptions={{ gestureEnabled: true }}
      >
        <Stack.Screen name="listBanks" component={ListBanks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
