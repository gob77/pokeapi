import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
  },
});

const PokeCard = ({name, sprites, types}) => {
  console.log(sprites.front_default);
  return (
    <Card style={styles.card}>
      <Card.Title title={name} />
      <Card.Content>
        <Paragraph>Types: {types[0]?.type.name}</Paragraph>
      </Card.Content>
      <Card.Cover
        style={{
          backgroundColor: 'red',
        }}
        resizeMode="center"
        source={{uri: sprites.other.home.front_default}}
      />
    </Card>
  );
};

export default PokeCard;
