import { Text,TouchableOpacity,TextInput,View } from "react-native";
import styles from "../styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Page from "../Page/page";


const AddressBar =(props) => {
    const [url, setUrl] = useState('https://google.com');
    console.log(ali2);

    const isValidUrl = (url) => {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
      };
    
      const navigateToUrl = () => {
        if (isValidUrl(url)) {
          setUrl(url.startsWith('http') ? url : `https://${url}`);
        } else {
          Alert.alert('Invalid URL', 'Please enter a valid URL!');
        }
      };
    
    
     
    let address1=props.name+' hi';
    return( 

        <View style={styles.addressBar}>
        <TouchableOpacity style={styles.button} onPress={() => setUrl('https://google.com')}>
          <Text style={styles.buttonText}>Google</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.urlInput}
          value={url}
          onChangeText={setUrl}
          onSubmitEditing={navigateToUrl}
        />
        <TouchableOpacity style={styles.button} onPress={saveBookmark}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        
      </View>
        

    );

}
export default  AddressBar;