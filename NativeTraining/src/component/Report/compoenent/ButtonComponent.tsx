import React from 'react';
import {Button} from 'react-native';

interface IButtonComponent {
  title: string;
  onPress?: Function;
  style?: any;
}
// in development
// const defaultStyle = {
// };
const ButtonComponent = (props: IButtonComponent) => {
  const {title, onPress} = props;
  return (
    <Button
      title={title}
      onPress={(value: any) => onPress && onPress(value)}
      //   style={style}
    />
  );
};

export default ButtonComponent;
