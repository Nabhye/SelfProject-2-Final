import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Apps from '../App';
import Games from '../screens/Games';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Apps" component={Apps} />
      <Stack.Screen name="Games" component={Games} />
    </Stack.Navigator>
  );
};

export default StackNavigator;