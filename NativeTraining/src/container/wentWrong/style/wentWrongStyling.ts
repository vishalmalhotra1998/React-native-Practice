import {StyleSheet} from 'react-native';
export const wentWrongStyling = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%',
    marginBottom: '60%',
  },
  image: {
    flex: 2,
    // backgroundColor: 'red',
  },
  // imageStyling: {

  // },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  boldStyling: {
    // flex: 1,
    fontSize: 25,
    fontWeight: '200',
    fontStyle: 'normal',
    marginTop: '2%',
    marginBottom: '4%',
  },
  secondText: {
    marginBottom: 15,
    textAlign: 'center',
    width: 250,
    fontSize: 17,
    // lineHeight: 25,
  },
  modalHeader: {
    fontWeight: '700',
    fontSize: 25,
    fontFamily: 'Roboto',
    lineHeight: 26,
    textAlign: 'center',
    color: '#333333',
    marginTop: 30,
    marginBottom: 5,
  },
});
