import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Image, Alert } from 'react-native';
import MerchantDropdown  from '../components/MerchantDropdown';
import CurrencyDropdown from '../components/CurrencyDropdown';
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useReimbursements } from '../context/ReimbursementContext';

const CreateClaimFormScreen: React.FC = () => {
  const navigation = useNavigation();
  const { addReimbursement } = useReimbursements();
  // const [receiptUri, setReceiptUri] = useState<string | null>(null);
  interface Receipt {
    uri: string;
    name?: string;
    type?: string;
    size?: number;
  }

  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [merchant, setMerchant] = useState('');
  const [currency, setCurrency] = useState('SGD'); 
  const [amount, setAmount] = useState('');
  const [transactionDate, setTransactionDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const selectFile = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      selectionLimit: 0,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } 
      else if (response.assets && response.assets.length > 0) {
        const newReceipts: Receipt[] = response.assets.map(asset => ({
          uri: asset.uri || '',
          name: asset.fileName,
          type: asset.type,
          size: asset.fileSize,
        }));
        
        setReceipts([...receipts, ...newReceipts]);
        console.log('Selected file(s) added');
      }
    });
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || transactionDate;
    setShowDatePicker(false);
    setTransactionDate(currentDate);
  };

  const validateForm = () => {
    if (!merchant) {
      Alert.alert('Error', 'Please select a merchant');
      return false;
    }
    if (!amount) {
      Alert.alert('Error', 'Please enter an amount');
      return false;
    }
    if (!transactionDate) {
      Alert.alert('Error', 'Please select a transaction date');
      return false;
    }
    return true;
  };

  const handleSaveAsDraft = () => {
    if (!validateForm()) return;
    
    
    addReimbursement({
      merchant: merchant,
      amount: `${amount} ${currency}`,
      currency,
      status: 'Draft',
    });

    Alert.alert('Success', 'Claim saved as draft', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  const handleCreateClaim = () => {
    if (!validateForm()) return;
    
    
    addReimbursement({
      merchant: merchant,
      amount: `${amount} ${currency}`,
      currency,
      status: 'Approval Pending',
    });
    
    Alert.alert('Success', 'Claim created successfully', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Receipt(s)</Text>
      <View style={[styles.uploadContainer, { marginBottom: 28 }]}>
  {receipts.length > 0 ? (
    <View style={styles.receiptsContainer}>
      {receipts.map((receipt, index) => (
        <View key={index} style={styles.receiptThumbnailContainer}>
          <Image source={{ uri: receipt.uri }} style={styles.receiptThumbnail} />
        </View>
      ))}
      <TouchableOpacity style={styles.addMoreButton} onPress={selectFile}>
        <Text style={styles.addMoreButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={selectFile} style={styles.uploadContent}>
      <Image source={require('../assets/icons/upload.png')} style={styles.uploadIcon} />
      <Text style={styles.uploadText}>Upload receipts</Text>
      <Text style={styles.fileTypes}>PNG, JPG, PDF upto 5 MB</Text>
    </TouchableOpacity>
  )}
</View>
      <View style={ { marginBottom: 20 }} /> 
      
      <Text style={styles.label2}>Merchant</Text>
      <View style={styles.customDropdownWrapper}>
      <MerchantDropdown
        selectedMerchant={merchant}
        onMerchantChange={setMerchant}
      />
      </View>
      <View style={ { marginBottom: 22 }} /> 
        
      <Text style={styles.label2}>Currency</Text>
      <View style={styles.customDropdownWrapper}>
      <CurrencyDropdown
        selectedCurrency={currency}
        onCurrencyChange={setCurrency}
      />
      </View>

      <View style={ { marginBottom: 22 }} />
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.inlineInput}
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <View style={{ marginBottom: 22 }} /> 

      <Text style={styles.label}>Transaction Date</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
        <Text style={styles.dateText}>
          {transactionDate ? transactionDate.toLocaleDateString() : 'Select date'}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={transactionDate || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <View style={{ marginBottom: 18 }} /> 

<View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#f1f5f9' }]} 
          onPress={handleSaveAsDraft}
        >
          <Text style={[styles.buttonText, { color: '#1A73E8' }]}>Save as Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleCreateClaim}
        >
          <Text style={styles.buttonText}>Create Claim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '400'
  },
  uploadContainer: {
    minHeight: 160, 
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10, 
  },
  uploadContent: {
    alignItems: 'center',
  },
  uploadIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  uploadText: {
    color: '#1A73E8',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  receiptsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  receiptThumbnailContainer: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  receiptThumbnail: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  addMoreButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  addMoreButtonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  fileTypes: {
    color: '#888',
    fontSize: 16,
    marginTop: 5,
  },
  receiptImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  label2: {
    fontSize: 22,
    marginBottom
    : 16,
  },
  customDropdownWrapper: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center', 
    paddingVertical: 0,
    marginBottom: 18,
  },  
  label: {
    fontSize: 22,
    marginBottom: 18,
  },
  inlineInput: {
    fontSize: 18,
    height: 40,
    marginBottom: 22,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  datePicker: {
    height: 40,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 16,
  },
  dateText: {
    color: '#888',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 12,
    margin: 5,
    backgroundColor: '#1A73E8',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 26,
  },
  
});

export default CreateClaimFormScreen;
