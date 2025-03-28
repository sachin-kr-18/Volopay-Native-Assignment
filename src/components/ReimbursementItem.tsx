import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getInitials, getRandomColor } from '../utils/common';
                                                                              
interface ReimbursementItemProps {
  item: {
    id: string;
    merchant: string;
    amount: string;
    currency: string;
    status: string;
  };
}

const ReimbursementItem: React.FC<ReimbursementItemProps> = ({ item }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return '#4ade80';
      case 'Draft':
        return '#f97316'; 
      case 'Approval Pending':
        return '#f97316'; 
      default:
        return '#888888';
    }
  };
  

  const initials = getInitials(item.merchant);
  const backgroundColor = `rgb(${getRandomColor(item.merchant)})`;

  

  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftSection}>
      <View style={[styles.icon, { backgroundColor }]}>
          <Text style={styles.iconText}>{initials}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.merchant}>{item.merchant}</Text>
          <Text style={[styles.status, { color: getStatusColor(item.status) }]}>
            {item.status}
          </Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
  },
  icon: {
    width: 50, 
    height: 50,
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18, 
  },
  details: {
    justifyContent: 'center',
  },
  merchant: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  status: {
    fontSize: 16,
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  usdAmount: {
    fontSize: 14,
    color: '#888888',
    marginTop: 2,
  },
});

export default ReimbursementItem;