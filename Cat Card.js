import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const DATA = [
  { id: '1', category: 'Exercise', task: '12 Tasks', image: require('./Resources/download.jpeg') },
  { id: '2', category: 'Study', task: '12 Tasks', image: require('./Resources/study.png') },
  { id: '3', category: 'Code', task: '12 Tasks', image: require('./Resources/code.jpeg') },
  { id: '4', category: 'Wash', task: '12 Tasks', image: require('./Resources/Wash.jpeg') },
  { id: '5', category: 'Eat', task: '12 Tasks', image: require('./Resources/eat.jpeg') },
  { id: '6', category: 'Swim', task: '12 Tasks', image: require('./Resources/swim.jpeg') },
  { id: '7', category: 'Dance', task: '12 Tasks', image: require('./Resources/dance.jpeg') },
  { id: '8', category: 'Sing', task: '12 Tasks', image: require('./Resources/sing.jpeg') },
  { id: '9', category: 'Write', task: '12 Tasks', image: require('./Resources/write.jpeg') },

  
];

const Card = ({ category, task, image }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{category}</Text>
      <Text style={styles.task}>{task}</Text>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const CardList = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card category={item.category} task={item.task} image={item.image} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150, // Adjust the width of each card as needed
    height: 200, // Adjust the height of each card as needed
    marginHorizontal: 10, // Add margin between each card
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flex:1,
    position: 'static',
    marginTop: 250,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    lineHeight: 19.2,

  },
  task:{
    fontWeight: 400,
    fontSize: 15,

  },
  image: {
    width: '100%', // Ensure image takes up the entire width of the card
    height: '50%', // Adjust the height of the image as needed
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default CardList;
