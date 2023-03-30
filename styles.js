import { StyleSheet } from "react-native";
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
      color:'#145636'
    },
    button: {
      paddingHorizontal: 12,
    },
    buttonText: {
      fontSize: 16,
      color:'#655435'
    },
    webViewContainer: {
      flex: 1,
    },
    bookmarksContainer: {
      padding: 8,
    },
  });
  export default styles;