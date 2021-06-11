import React from 'react';
import {Modal, View, Text, Button, TouchableOpacity} from 'react-native';
import deleteStyles from './style';
import {deleteModal} from './constants';
interface IDeleteModal {
  open: boolean;
  type: string;
  onClick?: Function;
  onClose?: Function;
}

const DeleteModal = (props: IDeleteModal) => {
  const customizeButton = () => {
    return (
      <TouchableOpacity
        style={deleteStyles.okButton}
        onPress={() => handleOnOk()}>
        <Text style={deleteStyles.okText}>Ok</Text>
      </TouchableOpacity>
    );
  };
  const handleOnOk = () => {
    const {onClick, onClose} = props;
    onClick && onClick();
    onClose && onClose();
  };
  const {open, onClose, type} = props;
  const {header, text} = deleteModal[type];
  return (
    <Modal
      animationType="slide"
      visible={open}
      transparent={true}
      style={deleteStyles.container}>
      <View style={deleteStyles.root}>
        <Text style={deleteStyles.textTag}>{header}</Text>
        <Text style={deleteStyles.textInfo}>{text}</Text>
        <View style={deleteStyles.buttonGroup}>
          {/* <Button title="Ok" color="#696969" onPress={() => handleOnOk()} /> */}
          {customizeButton()}
          <Button title="Cancel" onPress={() => onClose && onClose()} />
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;
