import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.group1}>
          <Text style={styles.headStyle}>Hello , Devs</Text>
          <Text style={styles.task}>14 tasks today</Text>
        </View>
        <View style={styles.profile}>
          <Image source={require('./Resources/Ellipse 1.png')} style={styles.ellipseImage} />
          <Image source={require('./Resources/person.png')} style={styles.personImage} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    justifyContent: 'flex-start',
    padding: 20,
    marginTop: 52,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    // marginTop: 52,
  },
  group1: {
    width: 'auto', // Allow it to wrap the content
  },
  headStyle: {
    fontSize: 32,
    lineHeight: 38.4,
    fontWeight: '700',
  },
  task: {
    fontSize: 12,
  },
  profile: {
    position: 'relative',
    width: 50, // Set the width of the profile container
    height: 50, // Set the height of the profile container
  },
  ellipseImage: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
  personImage: {
    width: 50,
    height: 50,
  },
});
