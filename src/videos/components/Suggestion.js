import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Suggestion = ({title, medium_cover_image, year, rating, genres}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={{uri: medium_cover_image}} style={styles.cover} />
        <View style={styles.genre}>
          <Text style={styles.genreText}>{genres[0]}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#000',
  },
  genreText: {
    color: '#fff',
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#70b124',
    paddingHorizontal: 6,
    paddingVertical: 4,
    color: '#fff',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Suggestion;
