import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Login from "./pages/Login";
import Home from "./pages/Home";
import Silo from "./pages/Silo";
import ChartView from "./pages/ChartView";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Silo" component={Silo} />
        <AppStack.Screen name="ChartView" component={ChartView} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
