import {StyleSheet} from 'react-native';

const deleteStyle = StyleSheet.create({
  container: {
    borderStyle: 'solid',
  },
  root: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-around',
    marginLeft: '12%',
    marginRight: '12%',
    marginTop: '140%',
  },
  textTag: {
    textAlign: 'center',
    marginBottom: '3.5%',
    fontWeight: '200',
    fontSize: 25,
  },
  textInfo: {
    textAlign: 'center',
    marginBottom: '3.5%',
    fontWeight: '200',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    marginLeft: '8%',
    marginRight: '8%',
  },
  okButton: {
    marginTop: '2.5%',
  },
  okText: {
    color: 'blue',
  },
});

export default deleteStyle;
