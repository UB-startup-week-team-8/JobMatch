import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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
        <View style={styles.container}>
            <Image source={dude} style={styles.profileImage} />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.label}>Job Range in Miles: {rounded}</Text>
            <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={100}
                value={rounded}
                onValueChange={(value) => setCurrentValue(value)} />

            <SelectDropdown
                data={options}
                defaultValue={options[defaultOptionIndex]}
                defaultIndex={defaultOptionIndex}
                onSelect={handleSelection}
                buttonStyle={styles.dropdownButton}
                buttonTextStyle={styles.dropdownButtonText}
                dropdownStyle={styles.dropdown}
                dropdownTextStyle={styles.dropdownText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
    },
    profileImage: {
        height: 200,
        width: 200,
        borderRadius: 100,
        marginTop: 20,
    },
    name: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        marginTop: 20,
        fontSize: 16,
    },
    slider: {
        width: '80%',
        marginTop: 10,
    },
    sliderValue: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdownButton: {
        marginTop: 20,
        backgroundColor: '#90f0f0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    dropdownButtonText: {
        fontSize: 16,
    },
    dropdown: {
        marginTop: 10,
        width: '80%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    dropdownText: {
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});

export default SettingsPage;
