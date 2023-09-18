import React, { useState } from 'react';
import { View, Text, Image} from 'react-native';
import Slider from '@react-native-community/slider';
import dude from './person.jpg';
import SelectDropdown from 'react-native-select-dropdown';

const SettingsPage = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const rounded = Math.round(currentValue);

    const options = ['Technology', 'Finance', 'Health', 'Business', 'Law'];
    const defaultOptionIndex = 0; // Index of the default selected option
    const handleSelection = (selectedItem, selectedIndex) => {
        console.log(selectedItem, selectedIndex);
        // Do something with the selected option
      };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {dude} style={{height:125, width:125, borderRadius:100, marginTop:20}}></Image>
        <Text style={{marginTop:10, fontSize:20}}>John Doe</Text>
        <Text style={{marginTop:50}}>Job Range in Miles:</Text>
      <Slider
        style={{ width: '60%',marginTop:0}}
        minimumValue={1}
        maximumValue={100}
        value={rounded}
        onValueChange={(value) => setCurrentValue(value)}/>
        <Text>{rounded}</Text>
        
        <SelectDropdown
        data={options}
        defaultIndex={4}
        onSelect={handleSelection}/>
    </View>
  );
};

export default SettingsPage;