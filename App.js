import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Bar from './Bar';
import Search from './Search';
import CardCategory from './Cat Card';
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

        <CardCategory style={styles.card1} />
        <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
   

    
  },
  cate:{
    position: 'absolute',
    fontSize: 20,
    marginTop: 213,
    marginLeft: 20,
    fontWeight: '700',    
  },
  // card1:{
  //   position: 'absolute',
  //   marginTop: 240,
  // }
});
