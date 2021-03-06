import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);

    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>
        {result.name}
      </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => {
          photo;
        }}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default ResultsShowScreen;
