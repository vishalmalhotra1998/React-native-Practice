import React from 'react';
import {TextInput} from 'react-native';

interface ITextFieldProps {
  style?: any;
  label?: string;
  disabled?: boolean;
  leftIcon?: any;
  placeHolder?: string;
  onFocus?: Function;
  onBlur?: Function;
  onChange?: Function;
  onPressOut?: Function;
  value?: any;
  textContentType: string;
}
const getTextContentType = (type: any) => {
  switch (type) {
    case 'emailAddress':
      return 'emailAddress';
    default:
      return 'none';
  }
};
const TextField = (props: ITextFieldProps) => {
  const {
    textContentType = 'none',
    style,
    onBlur,
    onChange,
    onFocus,
    placeHolder,
    value,
  } = props;
  return (
    <TextInput
      textContentType={getTextContentType(textContentType)}
      style={style}
      onBlur={() => onBlur && onBlur()}
      onChangeText={(e: any) => onChange && onChange(e)}
      onFocus={() => onFocus && onFocus()}
      placeholder={placeHolder}
      value={value}
    />
  );
};

export default TextField;
