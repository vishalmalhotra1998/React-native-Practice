import React, {useState, useEffect} from 'react';
import {observer} from 'mobx-react';
import {TextField} from './components';
import {StyleSheet, View, Text} from 'react-native';

const renderText = (value: string): any => {
  return <Text style={styleSheet.text}>{value}</Text>;
};
const initialState = {
  name: '',
  email: '',
};

const SignUp = observer((props: any) => {
  const [state, setState] = useState(initialState);
  const {name, email} = state;
  const handleOnChange = (key: string) => (event: any) => {
    setState({...state, [key]: event});
  };
  useEffect(() => {
    const {store} = props;
    store.setSignUp({...state});
    console.log('::::::::useEffect:::::', store.signUpData);
  }, [props, state]);
  return (
    <View style={styleSheet.root}>
      {renderText('Name')}
      <TextField
        textContentType="none"
        style={styleSheet.textField}
        value={name}
        onChange={handleOnChange('name')}
      />
      {renderText('Email')}
      <TextField
        textContentType="emailAddress"
        style={styleSheet.textField}
        value={email}
        onChange={handleOnChange('email')}
      />
      <Text>
        Completed: `{props.store.nameLength}` remaining: `{}`
      </Text>
    </View>
  );
});
const styleSheet = StyleSheet.create({
  textField: {
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: '5%',
    marginRight: '5%',
  },
  root: {
    marginTop: '30%',
    flex: 1,
  },
  text: {
    marginLeft: '5%',
  },
});
export default SignUp;
