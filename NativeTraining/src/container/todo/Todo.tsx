/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button, Text} from 'react-native';
import {observer} from 'mobx-react';

const Todo = observer(({todo}: any) => {
  return (
    <View>
      <Button
        onPress={() => {
          todo.addData('testName');
        }}
        title="Add"
      />
      <Button
        onPress={() => {
          todo.deleteData('testName');
        }}
        title="remove"
      />
      <Text style={{display: 'flex', flexDirection: 'column'}}>
        {todo &&
          todo.value.length &&
          todo.value.map((ele: any) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>{ele.id}</Text>
              <Text>{ele.name}</Text>
            </View>
          ))}
      </Text>
    </View>
  );
});

export default Todo;
