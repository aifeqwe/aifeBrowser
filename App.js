import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebView from 'react-native-webview';

const App = () => {
  const [url, setUrl] = useState('https://google.com');
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
    } catch (error) {
      console.log(error);
    }
  };

  const clearHistory = async () => {
    // حذف تاریخچه از AsyncStorage
    try {
      await AsyncStorage.removeItem('bookmarks');
      setBookmarks([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.addressBar}>
        <TouchableOpacity style={styles.button} onPress={() => setUrl('https://google.com')}>
          <Text style={styles.buttonText}>Google</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.urlInput}
          value={url}
          onChangeText={setUrl}
          onSubmitEditing={() => setUrl(url.startsWith('http') ? url : `https://${url}`)}
        />
        <TouchableOpacity style={styles.button} onPress={saveBookmark}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.webViewContainer}>
        <WebView source={{ uri: url }} />
      </View>
      <View style={styles.bookmarksContainer}>
        <TouchableOpacity style={styles.button} onPress={clearHistory}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  urlInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 8,
    marginHorizontal: 8,
  },
  button: {
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 16,
  },
  webViewContainer: {
    flex: 1,
  },
  bookmarksContainer: {
    padding: 8,
  },
});