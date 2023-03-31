import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';
import styles from './styles';

const Webview = ({ url }) => {
  return (
    <View style={styles.webViewContainer}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

export default Webview;