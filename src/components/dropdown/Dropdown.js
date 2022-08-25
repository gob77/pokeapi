import React, {useState} from 'react';
import DropDown from 'react-native-paper-dropdown';

const searchFor = [
  {
    label: 'Pokemons',
    value: 'pokemon',
  },
  {
    label: 'Moves',
    value: 'moves',
  },
  {
    label: 'Evolutions',
    value: 'evolutions',
  },
];

const Dropdown = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <DropDown
      label="What you want to search?"
      list={searchFor}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
    />
  );
};

export default Dropdown;
