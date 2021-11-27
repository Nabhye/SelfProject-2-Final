import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {Image} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Profile") {
                iconName = "profile";
              }

              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  size={size}
                />
              );
            }
          })}
          tabBarOptions={{
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "black",
            style: {
              height: 90,
              borderTopWidth: 0,
              backgroundColor: "#5653d4"
            },
            labelStyle: {
              fontSize: 20,
              fontFamily: "Rajdhani_600SemiBold"
            },
            labelPosition: "beside-icon",
            tabStyle: {
              marginTop: 25,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 40,
              borderWidth: 10, 
              alignItems: "center",
              justifyContent: "center", 
              backgroundColor: "#5653d4"  
            }
          }}
        >
        
          <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
