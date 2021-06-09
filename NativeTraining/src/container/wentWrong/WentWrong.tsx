import React, {PureComponent} from 'react';
// import { IWentWrongProp } from '../interface/WentWrong';
import {View, Text, Image} from 'react-native';
import {wentWrongStyling} from './style/wentWrongStyling';
// import { IWentWrongProp } from '../interface/WentWrong';
const image = require('../../../unnamed.jpg');
//if need the
interface IWentWrongProps {}
class WentWrong extends PureComponent<IWentWrongProps> {
  constructor(props: IWentWrongProps) {
    super(props);
  }
  render = () => {
    return (
      <>
        <View style={wentWrongStyling.root}>
          <Image source={image} />
          <View style={wentWrongStyling.text}>
            <Text style={wentWrongStyling.boldStyling}>
              Some thing went wrong!
            </Text>
            <Text style={wentWrongStyling.secondText}>
              This slide not available Please continue with next Slide
            </Text>
          </View>
        </View>
      </>
    );
  };
}

export default WentWrong;
