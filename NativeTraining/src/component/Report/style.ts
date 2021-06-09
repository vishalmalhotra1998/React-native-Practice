import {StyleSheet} from 'react-native';

export const reportModalStyle = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  parentView: {
    marginTop: '2%',
    fontWeight: '100',
  },
  textView: {
    flex: 1,
    fontWeight: '100',
    fontSize: 25,
    textAlign: 'center',
  },
  modalView: {
    display: 'flex',
  },
  textInput: {
    width: '96.5%',
    borderColor: 'black',
    marginLeft: '2%',
    borderWidth: 0.5,
  },
  buttonGrouping: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: '60%',
  },
});
