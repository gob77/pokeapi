import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Menu, Divider, Provider} from 'react-native-paper';

const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '25%',
  },
});

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={styles.view}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};

export default MyComponent;
