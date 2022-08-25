import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import useAxios from './src/utils/axios';
import Header from './src/components/header/Header';
import Menu from './src/components/menu/Menu';
import Input from './src/components/input/Input';
import AppBar from './src/components/appbar/AppBar';
import PokeCard from './src/components/card/Card';

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#4ab583',
    height: '100%',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
  },
  appBar: {
    marginVertical: 20,
  },
});

const App = () => {
  console.log(1);
  const [data, setData] = useState(null);
  const {response, loading, error} = useAxios(
    'https://pokeapi.co/api/v2/pokemon/ditto',
  );

  const getResponse = () => {
    setData(response);
  };

  useEffect(() => {
    getResponse();
  }, [response]);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Header />
      {data ? <PokeCard {...data} /> : <Text>Loading...</Text>}
      {/*<AppBar onClick={handleClick} style={styles.appBar} />
       {showAppBar && (
        <View style={styles.searchBar}>
          <Input />
        </View>
      )} */}
      {/* <Image
        style={{width: 50, height: 50}}
        source={{uri: response.sprites.front_default}}
      /> */}
    </SafeAreaView>
  );
};

export default App;
