import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
    return (
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <Image source={require('./Resources/Vector (1).png')} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="rgba(0, 0, 0, 0.5)" // Semi-transparent placeholder text
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Image source={require('./Resources/Group 2.png')} style={styles.buttonIcon} />
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

        width: '100%',
        marginTop: 150,
        // left:20,
        height: 48,
        position: 'absolute',
        // marginLeft:20,
        marginRight: 20,
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 20,
        border: 1,
        flex: 1, 
        marginRight: 10,
        height:48,
        width: 280,
      },
      icon: {
        width: 24,
        height: 24,
        tintColor: 'rgba(0, 0, 0, 0.5)', 
        marginRight: 10,
      },
      input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
      },
      filterButton: {
        padding: 10,
        height: 48,
        // borderRadius: 25,
        
        justifyContent: 'center',
      },
      buttonIcon: {
        width: 50,
        height: 48,
        justifyContent: 'center',
        

      },
    });