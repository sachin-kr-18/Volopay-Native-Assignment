import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReimbursementListScreen from './src/screens/ReimbursementListScreen';
import CreateClaimFormScreen from './src/screens/CreateClaimFormScreen';
import { RootStackParamList } from './src/navigation/types';
import { ReimbursementProvider } from './src/context/ReimbursementContext';
const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <ReimbursementProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Reimbursements">
        <Stack.Screen 
          name="Reimbursements" 
          component={ReimbursementListScreen}
          options={{
            headerTitle: 'Reimbursement',
          }}
        />
        <Stack.Screen 
          name="CreateClaimForm" 
          component={CreateClaimFormScreen}
          options={{
            headerTitle: 'Create Claim',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ReimbursementProvider>
  );
};

export default App;
