import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from 'react-native';

interface MerchantDropdownProps {
  selectedMerchant: string;
  onMerchantChange: (value: string) => void;
}

const merchants = [
  { label: 'Walmart', value: 'walmart' },
  { label: 'Amazon', value: 'Amazon' },
  { label: 'Google', value: 'Google' },
  { label: 'Grab', value: 'Grab' },
  { label: 'Paytm', value: 'Paytm' },
  { label: 'Uber', value: 'Uber' },
  { label: 'Netflix', value: 'Netflix' },
  { label: 'Apple', value: 'Apple' },
  { label: 'Facebook', value: 'Facebook' },
  { label: 'Microsoft', value: 'Microsoft' },
  { label: 'Tesla', value: 'Tesla' },
  { label: 'Spotify', value: 'Spotify' },
  { label: 'Adobe', value: 'Adobe' },
  { label: 'Slack', value: 'Slack' },
  { label: 'Zoom', value: 'Zoom' },
  { label: 'JP Morgan', value: 'JP Morgan' },
];

const MerchantDropdown: React.FC<MerchantDropdownProps> = ({
  selectedMerchant,
  onMerchantChange,
}) => {
  return (
    <RNPickerSelect
      style={{
        ...pickerSelectStyles,
        placeholder: pickerSelectStyles.placeholder, 
      }}
      placeholder={{
        label: 'Select a merchant...',
        value: null,
        color: pickerSelectStyles.placeholder.color, 
      }}
      onValueChange={onMerchantChange}
      items={merchants}
      value={selectedMerchant}
    />
  );
};
 
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 24, 
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30,
      marginBottom: 16,
    },
    inputAndroid: {
      fontSize: 24, 
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      color: 'black',
      paddingRight: 30,
      marginBottom: 16,
      backgroundColor: 'transparent', 
    },
    iconContainer: {
      top: 10,
      right: 12,
    },
    placeholder: {
      color: '#888',
      fontSize: 24, 
    },
  });
  export default MerchantDropdown;
