// import React from 'react';
// import {Radio, Right, Left, ListItem, Text} from 'native-base';
// import {View} from 'react-native';

// interface IRadioComponent {
//   onPress?: Function;
//   values: any;
//   default?: number;
// }
// const RadioComponent = (props: IRadioComponent) => {
//   const {onPress, values} = props;
//   // const [selected, setSelected] = useState(default);
//   return (
//     <View>
//       {values.map((ele: any, index: number) => (
//         <ListItem>
//           <Left style={{}}>
//             <Radio
//               color={'#f0ad4e'}
//               selectedColor={'#5cb85c'}
//               selected={false}
//               onPress={() => onPress && onPress()}
//             />
//           </Left>
//           <Left>
//           <Text>{ele.label}</Text>
//           </Left>
//         </ListItem>
//       ))}
//     </View>
//   );
// };

// export default RadioComponent;
