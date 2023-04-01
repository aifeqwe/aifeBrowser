import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';
import styles from './styles';
import { ProgressBar } from '@react-native-community/progress-bar-android';

const Webview = ({ url }) => {
  const webViewRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleWebViewNavigation = navState => {
    const { url: currentUrl, estimatedProgress } = navState;
    setProgress(estimatedProgress);
    setIsLoading(navState.loading);
  };

  return (
    <View style={styles.webViewContainer}>
      <WebView
        ref={webViewRef}
        source={{ uri: url }}
        onNavigationStateChange={handleWebViewNavigation}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading ? (
        <ProgressBar styleAttr="Horizontal" progress={progress} />
      ) : (
        <React.Fragment>
          <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
        </React.Fragment>
      )}
    </View>
  );
};

export default Webview;