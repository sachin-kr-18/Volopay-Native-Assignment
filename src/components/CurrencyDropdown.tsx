import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from 'react-native';

interface CurrencyDropdownProps {
  selectedCurrency: string;
  onCurrencyChange: (value: string) => void;
}

const currency = [
    { value: 'INR', label: 'INR' },
    { value: 'USD', label: 'USD' },
    { value: 'SGD', label: 'SGD' },
    { value: 'IDR', label: 'IDR' },
    { value: 'AUD', label: 'AUD' },
  ];
const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({
  selectedCurrency,
  onCurrencyChange,
}) => {
  return (
    <RNPickerSelect
      style={pickerSelectStyles}
      placeholder={{
        label: 'Select a currency...',
        value: null,
      }}
      onValueChange={onCurrencyChange}
      items={currency}
      value={selectedCurrency}
    />
  );
};

  const pickerSelectStyles = StyleSheet.create({
      inputIOS: {
        fontSize: 24, 
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 0, 
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        marginBottom: 16,
      },
      inputAndroid: {
        fontSize: 24, 
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0, 
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
      },
    });


export default CurrencyDropdown;