import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Open document picker"
          onPress={() => {
            DocumentPicker.getDocumentAsync({});
          }}
        />

        <View style={{height: 20}} />

        <Button
          title="Open image picker"
          onPress={() => {
            ImagePicker.launchImageLibraryAsync({});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
