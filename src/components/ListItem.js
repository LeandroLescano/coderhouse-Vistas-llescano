import {Pressable, Text, View} from 'react-native';

import React from 'react';
import {styles} from '../styles/Global.styles';

const ListItem = ({item, handlePress, buttonText}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Pressable style={styles.button} onPress={() => handlePress()}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default ListItem;
