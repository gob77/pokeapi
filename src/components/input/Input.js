import React from 'react';
import {StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';

const styles = StyleSheet.create({
  search: {
    height: 35,
    width: '75%',
    marginVertical: 20,
    borderWidth: 1,
  },
});

const Input = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      style={styles.search}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default Input;
