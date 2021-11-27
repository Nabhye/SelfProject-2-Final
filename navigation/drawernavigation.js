import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Apps from '../App';
import Games from '../screens/Games';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true
    };
  }

  render() {
    let props = this.props;
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          itemStyle: { marginVertical: 5 }
        }}>
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Apps"
          component={Apps}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Games"
          component={Games}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    );
  }
}

