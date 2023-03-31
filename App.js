import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from './Menu';
import Webview from './Webview';
import Bookmarks from './Bookmarks';
import styles from './styles';

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const [url, setUrl] = useState('https://google.com');

  const saveBookmark = (newUrl) => {
    setBookmarks([...bookmarks, newUrl]);
  };

  const clearHistory = () => {
    setBookmarks([]);
  };

  return (
    <View style={styles.container}>
      <Menu setUrl={setUrl} saveBookmark={saveBookmark} clearHistory={clearHistory} />
      <Webview url={url} />
      <Bookmarks bookmarks={bookmarks} clearHistory={clearHistory} setUrl={setUrl} />
    </View>
  );
};

export default App;