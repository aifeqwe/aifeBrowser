import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebView from 'react-native-webview';
import styles from './styles';
import AddressBar from './Form/addressBar';
import Page from './Page/page';


const App = () => {
 
  const [bookmarks, setBookmarks] = useState([]);
  

  

  useEffect(() => {
    // دریافت بوکمارک‌ها از AsyncStorage
    getBookmarks();
  }, []);

  const getBookmarks = async () => {
    try {
      const bookmarks = await AsyncStorage.getItem('bookmarks');
      if (bookmarks !== null) {
        setBookmarks(JSON.parse(bookmarks));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveBookmark = async () => {
    // ذخیره کردن بوکمارک جدید در AsyncStorage
    try {
      await AsyncStorage.setItem('bookmarks', JSON.stringify([...bookmarks, url]));
      Alert.alert('Success', 'Bookmark saved!');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to save bookmark!');
    }
  };

  const clearHistory = async () => {
    // حذف تاریخچه از AsyncStorage
    try {
      await AsyncStorage.removeItem('bookmarks');
      setBookmarks([]);
      Alert.alert('Success', 'History cleared!');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to clear history!');
    }
  };
  return (
    <View style={styles.container}>
      <AddressBar></AddressBar>
      <View style={styles.bookmarksContainer}>
        <TouchableOpacity style={styles.button} onPress={clearHistory}>
          <Page></Page>
          <Text style={styles.buttonText}>Clear history</Text>
        </TouchableOpacity>
        {bookmarks.map((bookmark, index) => (
          <TouchableOpacity key={index} onPress={() => setUrl(bookmark)}>
            <Text>{bookmark}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default App;