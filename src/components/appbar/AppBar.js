import React from 'react';
import {Appbar} from 'react-native-paper';

const AppBar = ({onClick}) => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Pokedex" />
      <Appbar.Action icon="magnify" onPress={onClick} />
    </Appbar.Header>
  );
};

export default AppBar;
