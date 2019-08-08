import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 34,
    paddingHorizontal: 36
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
    return (
      <LinearGradient
        colors={['#F6F7F9', '#F6F7F9', '#F6F7F9']}
        style={styles.container}
      >
        {this.state.fontLoaded && (
          <Text style={{ fontFamily: 'OpenSans-Bold' }}>
            Fonts have been loaded successfully
          </Text>
        )}
        {!this.state.fontLoaded && <Text>No fonts have been loaded</Text>}
      </LinearGradient>
    );
  }
}
