import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export const DropDownMenu = () => {
  const [selectedLabel, setSelectedLabel] = useState(null);
  const labels = [
    { label: 'Food', value: 'food' },
    { label: 'Scenery', value: 'scenery' },
    { label: 'History', value: 'history' },
  ];

  return (
    <View>
      <DropDownPicker
        items={labels}
        defaultValue={selectedLabel}
        containerStyle={{ height: 40, width: 200 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(item) => setSelectedLabel(item.value)}
      />
    </View>
  );
};
