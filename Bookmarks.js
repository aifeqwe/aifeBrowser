import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Bookmarks = ({ bookmarks, clearHistory, setUrl }) => {
  return (
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
  );
};

export default Bookmarks;