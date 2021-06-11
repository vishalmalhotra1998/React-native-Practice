import React, {useState} from 'react';
import {Button, View} from 'react-native';
import DeleteModal from './Delete';

const OpenDeleteModal = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <View>
      <Button onPress={() => toggle()} title="open delete Modal" />
      <DeleteModal open={open} onClose={toggle} type="remove" />
    </View>
  );
};

export default OpenDeleteModal;
