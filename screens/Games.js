import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class GamesScreen extends React.Component {
  render() {
    return (
      <View style={styles.conatiner}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <Text style={styles.text}>Games</Text>
        </View>

        <TouchableOpacity style={styles.gamecard}>
          <Text style={styles.gametext} onPress={() => Linking.openURL('')}>
            Ping Pong
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gamecard}>
          <Text
            style={styles.gametext}
            onPress={() =>
              Linking.openURL(
                'https://editor.p5js.org/nabhyetripathy15/full/wynwhOEV1'
              )
            }>
            T rex
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gamecard}>
          <Text
            style={styles.gametext}
            onPress={() =>
              Linking.openURL('https://whitehatjr.github.io/AngryBirds-1/')
            }>
            Angey Bird
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gamecard}>
          <Text
            style={styles.gametext}
            onPress={() =>
              Linking.openURL(
                'https://studio.code.org/projects/gamelab/wL_V9UMzdh4nmNsjGLVbwxJQNjBDL1C4-0VcHUgMkiw/'
              )
            }>
            Worlds Hardest Game
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gamecard}>
          <Text
            style={styles.gametext}
            onPress={() =>
              Linking.openURL(
                'https://editor.p5js.org/nabhyetripathy15/full/3f6lK4dES'
              )
            }>
            Ghost Runner
          </Text>
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
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    backgroundColor: 'blue',
  },
  gamecard: {
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
    margin: 40 
  },
});