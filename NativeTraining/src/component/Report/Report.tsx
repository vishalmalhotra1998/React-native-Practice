import React, {useState} from 'react';
import {Button, View} from 'react-native';
import ReportModal from './ReportModal';
const crossIcon = require('../../../ion-close-outline.png');

const values = [
  {name: 'Poor Quality'},
  {name: 'Not clear in understanding'},
  {name: 'Incomplete content'},
  {name: 'Incorrect content'},
  {name: 'Others'},
];
const REPORTTYPES = {
  REPORT: 'Report',
  MAXLENGTH: 400,
  PLACEHOLDER: 'write your problem',
  DEFAULTVALUE: 0,
};
const initialState = {
  open: false,
  selectedData: values[REPORTTYPES.DEFAULTVALUE],
};

const Report = () => {
  const [state, setState] = useState({...initialState});
  const toggleOpen = () => {
    setState({...state, open: !state.open});
  };
  const handleChange = (selectedValue: any) => {
    setState({...state, selectedData: selectedValue});
  };
  const handleSubmit = () => {
    const {selectedData} = state;
    console.log(selectedData, '::::::::::::value:::::');
  };

  return (
    <View>
      <View>
        <Button onPress={() => toggleOpen()} title="Report" />
      </View>
      {state.open && (
        <ReportModal
          open={state.open}
          value={[...values]}
          toggleOpen={toggleOpen}
          handleChange={handleChange}
          headerName={REPORTTYPES.REPORT}
          maxLength={REPORTTYPES.MAXLENGTH}
          placeHolder={REPORTTYPES.PLACEHOLDER}
          defaultValue={REPORTTYPES.DEFAULTVALUE}
          handleSubmit={handleSubmit}
          icon={crossIcon}
        />
      )}
    </View>
  );
};

export default Report;
