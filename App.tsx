import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReimbursementListScreen from './src/screens/ReimbursementListScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Reimbursements">
        <Stack.Screen 
          name="Reimbursements" 
          component={ReimbursementListScreen}
          options={{
            headerTitle: 'Reimbursement',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;