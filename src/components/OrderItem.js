import {Text, View} from 'react-native';

import React from 'react';
import styles from '../styles/OrderItem.styles';

const OrderItem = ({item}) => {
  const formatDay = time => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.date}>{formatDay(item.date)}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.text}>$ {item.total}</Text>
      </View>
    </View>
  );
};

export default OrderItem;
