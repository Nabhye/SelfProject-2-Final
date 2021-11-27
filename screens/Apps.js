import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class AppsScreen extends React.Component {
  render() {
    return (
      <View style={styles.conatiner}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <Text style={styles.text}>Apps</Text>

          <TouchableOpacity style={styles.appcard}>
            <Text style={styles.apptext}>StoryTelling </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appcard}>
            <Text style={styles.apptext}>Spectagram</Text>
          </TouchableOpacity>

                  <TouchableOpacity  style={styles.backbtn}>
          <Text
            onPress={() => this.props.navigation.navigate('Home')}
            style = {styles.text}
           >
            Back
          </Text>
        </TouchableOpacity>
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
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  appcard: {
     backgroundColor: 'gray',
    width: 250,
    alignItems: 'center',
    height: 25,
    margin: 20,
    marginLeft: 46,
    alignContent: 'center',
    borderRadius: 10,
  },
      backbtn: {
    backgroundColor: '#ffbf00',
    width: 100,
    height: 30, 
    marginLeft: 115,
    margin: 35 
  },
});
