import Cart from '../../screens/Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Orders from '../../screens/Orders';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartStackNavigation = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="Cart"
        options={{
          title: 'Carrito',
          headerRight: () => (
            <Ionicons
              name="ios-list"
              size={30}
              onPress={() => navigation.navigate('Orders')}
            />
          ),
        }}
        component={Cart}
      />
      <Stack.Screen
        name="Orders"
        options={{title: 'Ordenes'}}
        component={Orders}
      />
    </Stack.Navigator>
  );
};

export default CartStackNavigation;
