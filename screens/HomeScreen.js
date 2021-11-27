import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import DrawerNavigator from '../navigation/drawernavigation';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Games from './Games';

export default class HomeScreen extends React.Component {


  render() {
    return (
      <View style={styles.conatiner}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <Text style={styles.text}>WhiteHat Jr</Text>

         <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Games')}>
            <Text style={styles.routeText}>Games</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Apps')}>
            <Text style={styles.routeText}>Apps</Text>
          </TouchableOpacity>

              <Image
            style={styles.imageconatiner}
            source={require('../assets/whjrlogo.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 conatiner: {
    flex: 1
  },
  text: {
    color: 'cyan',
    backgroundColor: 'black',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  routeCard: {
        flex: 2,
       backgroundColor: "black",
       width: 250,
        marginTop: 60,
        margin: 24,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'cyan',
        justifyContent: "center",
        alignItems: "center"
    },
  imageconatiner: {
    width: 310,
    height: 300,
  },
});
