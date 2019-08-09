import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 34,
    paddingHorizontal: 36
  },
  heading: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 33,
    color: '#080D2D',
    lineHeight: 40,
    marginBottom: 31
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 21,
    borderRadius: 13,
    marginBottom: 29
  },
  input: {
    flex: 1,
    height: 55,
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    lineHeight: 19,
    color: '#080D2D'
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf')
    });

    this.setState({
      fontLoaded: true
    });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <LinearGradient
          colors={['#F6F7F9', '#F6F7F9', '#F6F7F9']}
          style={styles.container}
        >
          <StatusBar hidden />
          <Text style={styles.heading}>Carros</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} value="Ache seu carro..." />
            <TouchableOpacity>
              <Image source={require('./assets/images/search.png')} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      );
    } else {
      return (
        <LinearGradient
          colors={['#F6F7F9', '#F6F7F9', '#F6F7F9']}
          style={[styles.container, { justifyContent: 'center' }]}
        >
          <StatusBar hidden />
          <ActivityIndicator />
        </LinearGradient>
      );
    }
  }
}
