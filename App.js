import 'react-native-gesture-handler';
import {View} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GamesScreen from './screens/Games';
import AppsScreen from './screens/Apps';
import BottomTabNavigator from './navigation/TabNavigator';

const Stack = createStackNavigator();

function App() {
  return ( 
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Games" component={GamesScreen} />
        <Stack.Screen name="Apps" component={AppsScreen} />
      </Stack.Navigator>
    </NavigationContainer>  
  );  
}

export default App;