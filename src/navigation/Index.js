import CartStackNavigation from './cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import Orders from '../screens/Orders';
import React from 'react';
import ShopStackNavigation from './shop/Index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator>
        <BottomTabs.Screen
          name="Shop"
          options={{
            tabBarLabel: 'Tienda',
            headerShown: false,
            tabBarLabelStyle: {
              color: 'black',
            },
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'ios-home' : 'home-outline'}
                size={24}
              />
            ),
          }}
          component={ShopStackNavigation}
        />
        <BottomTabs.Screen
          name="CartStack"
          options={{
            tabBarLabel: 'Carrito',
            headerShown: false,
            tabBarLabelStyle: {
              color: 'black',
            },
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'ios-cart' : 'cart-outline'}
                size={24}
              />
            ),
          }}
          component={CartStackNavigation}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
