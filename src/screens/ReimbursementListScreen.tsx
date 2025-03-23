import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import ReimbursementItem from '../components/ReimbursementItem';
import reimbursements , {Reimbursement} from '../data/reimbursements';

const ReimbursementListScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<Reimbursement[]>(reimbursements);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredData(reimbursements);
    } else {
      const filtered = reimbursements.filter(item => 
        item.merchant.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchQuery]);

  const handleAddClaim = () => {
    console.log('Add claim button pressed');
    
  };


  const EmptyListComponent = () => (
    <View style={styles.emptyContainer}>
      
      <Image 
        source={require('../assets/empty-state.png')} 
        style={styles.emptyImage}
        resizeMode="contain"
      />
      <Text style={styles.emptyText}>No claims yet!</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList<Reimbursement>
        data={filteredData}
        ListEmptyComponent={EmptyListComponent}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ReimbursementItem item={item} />}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
      />

      <TouchableOpacity style={styles.floatingButton} onPress={handleAddClaim}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 16,
    paddingBottom: 8,
  },
  searchInput: {
    height: 46,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyImage: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    backgroundColor: '#6366f1',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default ReimbursementListScreen;