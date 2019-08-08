import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fontLoaded: false
    }
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf')
    })

    this.setState({
      fontLoaded: true
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded && <Text style={{fontFamily: "OpenSans-Bold"}}>Fonts have been loaded successfully</Text>}
        {!this.state.fontLoaded && <Text>No fonts have been loaded</Text>}
      </View>
    );
  }
}
