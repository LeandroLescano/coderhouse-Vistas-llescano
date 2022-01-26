import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {ORDERS} from '../data/orders';
import OrderItem from '../components/OrderItem';
import React from 'react';
import styles from '../styles/Cart.styles';

const Orders = () => {
  const items = ORDERS;

  const handleDelete = id => {
    console.log('Eliminar item', id);
  };

  const renderItem = data => (
    <OrderItem item={data.item} onDelete={() => handleDelete(data.item.id)} />
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
    </View>
  );
};

export default Orders;
