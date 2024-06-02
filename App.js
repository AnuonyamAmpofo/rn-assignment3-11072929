import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Bar from './Bar';
import Search from './Search';
// import * as Font from 'expo-font';
// import ELlipse1 from './assets/Ellipse 1.png'

export default function App() {
  return (
    <View style={styles.container}>
       
      
        <Bar/>
        <Search/>

        <Text style={styles.cate}>
          Categories
        </Text>
        <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    // alignItems: 'left',
    // justifyContent: 'flex-start',
    // width: 393,
    // height: 852,
    // borderRadius: 30,
    
    // left: -409,

    
  },
  cate:{
    position: 'absolute',
    fontSize: 20,
    marginTop: 213,
    marginLeft: 20,
    fontWeight: '700',    
  }
  
});
