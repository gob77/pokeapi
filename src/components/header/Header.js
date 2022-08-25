import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import images from '../../assets/images';

const styles = StyleSheet.create({
  header: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  logo: {
    height: '100%',
    width: '50%',
  },
  title: {
    fontFamily: 'AlNile-Bold',
    fontSize: 32,
    fontWeight: '700',
  },
});

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Pokedex</Text>
      <Image source={images.logo} style={styles.logo} />
    </View>
  );
};

export default Header;
