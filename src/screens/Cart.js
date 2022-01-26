import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {CART} from '../data/cart';
import CartItem from '../components/CartItem';
import React from 'react';
import styles from '../styles/Cart.styles';

const Cart = () => {
  const items = CART;
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleDelete = id => {
    console.log('Eliminar item', id);
  };

  const renderItem = data => (
    <CartItem item={data.item} onDelete={() => handleDelete(data.item.id)} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm}>
          <Text style={styles.confirmText}>CONFIRMAR</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total: ${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
