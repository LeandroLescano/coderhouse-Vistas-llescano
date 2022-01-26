import Categories from '../../screens/Categories';
import ProductDetail from '../../screens/ProductDetail';
import Products from '../../screens/Products';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen
        name="ProductDetail"
        options={{title: 'Details'}}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

export default ShopStackNavigation;
