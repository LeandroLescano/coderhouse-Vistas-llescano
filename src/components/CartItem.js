import {Text, TouchableOpacity, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import styles from '../styles/CartItem.styles';

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.details}>
        <View>
          <Text>Cantidad: {item.quantity}</Text>
          <Text>$ {item.price}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons
            name="ios-trash"
            size={24}
            color="#e63946"
            onPress={() => onDelete()}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
