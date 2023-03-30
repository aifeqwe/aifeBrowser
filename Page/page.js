import { Text,TouchableOpacity,TextInput,View } from "react-native";
import styles from "../styles";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Page =(props) => {

    return( 

      <View style={styles.webViewContainer}>
        <WebView source={{ uri: url }} />
      </View>

 
        

    );

}
export default Page;