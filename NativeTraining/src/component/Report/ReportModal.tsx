import React from 'react';
import {Modal, View, TextInput, Text, Image} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {reportModalStyle} from './style';
import Button from './compoenent/ButtonComponent';
// import RadioComponent from './compoenent/Radio';

// value type must change after api integration
interface IReportModal {
  open: boolean;
  value: any;
  headerName: string;
  maxLength?: number;
  defaultValue?: number;
  icon?: any;
  placeHolder?: string;
  toggleOpen: Function;
  handleChange?: Function;
  handleSubmit?: Function;
}
interface IConvertedData {
  label: string;
  value: number;
}
const radioValueFormat = (data: any) => {
  let convertedData: IConvertedData[] = [];
  data &&
    data.length &&
    data.forEach((element: any) => {
      if (typeof element === 'object') {
        convertedData.push({
          label: element.name,
          value: element.name,
        });
      } else {
        convertedData.push({
          label: element,
          value: element,
        });
      }
    });
  return convertedData;
};

const ReportModal = (props: IReportModal) => {
  const {
    open,
    value,
    toggleOpen,
    headerName,
    handleChange,
    maxLength,
    placeHolder,
    defaultValue,
    handleSubmit,
    icon,
  } = props;
  return (
    <Modal visible={open} animationType="slide" style={reportModalStyle.root}>
      <View style={reportModalStyle.parentView}>
        {/* {headerName && ( */}
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          {headerName && (
            <Text style={reportModalStyle.textView}>{headerName}</Text>
          )}
          {icon && (
            <View onTouchStart={() => toggleOpen()}>
              <Image source={icon} />
            </View>
          )}
        </View>
        {/* )} */}

        <View>
          {/* <RadioComponent
            values={radioValueFormat(value)}
            onPress={(selectedValue: string) => {
              handleChange && handleChange(selectedValue);
              setState({...state, selectedValue});
            }}
          /> */}
          <RadioForm
            radio_props={radioValueFormat(value)}
            onPress={(selectedValue: string) => {
              handleChange && handleChange(selectedValue);
            }}
            labelHorizontal={true}
            initial={defaultValue || 0}
          />
        </View>
        <TextInput
          multiline
          numberOfLines={4}
          maxLength={maxLength || 40}
          placeholder={placeHolder || 'write your problem'}
          style={reportModalStyle.textInput}
          textAlignVertical="top"
        />
        <View style={reportModalStyle.buttonGrouping}>
          <Button
            onPress={() => {
              toggleOpen();
            }}
            title="cancel"
          />
          <Button
            onPress={() => {
              toggleOpen();
              handleSubmit && handleSubmit();
            }}
            title="Report"
          />
        </View>
      </View>
    </Modal>
  );
};

export default ReportModal;
