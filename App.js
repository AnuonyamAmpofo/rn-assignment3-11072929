import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
// import * as Font from 'expo-font';
// import ELlipse1 from './assets/Ellipse 1.png'

export default function App() {
  return (
    <View style={styles.container}>
       
      <View style={styles.head}>
        <View style={styles.group1}>
        <Text style={styles.headStyle}>Hello , Devs</Text>
        <Text style={{fontWeight:500,}}>14 tasks today</Text>
        </View>
        <View style={styles.profile}>
          <Image source={require("./assets/Ellipse 1.png")} style={{width:50,height:50,top:2, left:304}}/>
        </View>
      </View>
        <Text style={styles.nameStyle}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    // alignItems: 'left',
    justifyContent: 'flex-start',
    // width: 393,
    // height: 852,
    radius:30,
    // top: -428,
    // left: -409,

    
  },
  group1:{
    width: 170,
    height: 52,
  },

  nameStyle:{
    // fontSize: 20,
  },
  head:{
    // flex: 1,
    top: 52,
    left: 20,
    fontFamily: 'Lato',
    alignSelf: 'flex-start'
    
  },
  headStyle:{
    fontFamily: 'lato',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 38.4,
    height:37,
    width: 170,
  },
  
  profile:{
    width:50,
    height:52,
  }
});
