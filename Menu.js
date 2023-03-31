import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const Menu = ({ setUrl, saveBookmark, clearHistory }) => {
  const [urlInput, setUrlInput] = useState('');

  const isValidUrl = (url) => {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
  };

  const navigateToUrl = () => {
    if (isValidUrl(urlInput)) {
      const url = urlInput.startsWith('http') ? urlInput : `https://${urlInput}`;
      setUrl(url);
      saveBookmark(url);
      setUrlInput('');
    } else {
      Alert.alert('Invalid URL', 'Please enter a valid URL!');
    }
  };

  return (
    <View style={styles.addressBar}>
      <TouchableOpacity style={styles.button} onPress={() => setUrl('https://google.com')}>
        <Text style={styles.buttonText}>Google</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.urlInput}
        value={urlInput}
        onChangeText={setUrlInput}
        placeholder="Enter URL"
        onSubmitEditing={navigateToUrl}
      />
      <TouchableOpacity style={styles.button} onPress={clearHistory}>
        <Text style={styles.buttonText}>Clear History</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;