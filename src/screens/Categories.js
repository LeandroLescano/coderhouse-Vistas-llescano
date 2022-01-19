import {Pressable, Text, View} from 'react-native';

import ListItem from '../components/ListItem';
import React from 'react';
import {styles} from '../styles/Global.styles';

const Categories = ({navigation}) => {
  const stockProducts = [
    {
      name: 'Bread',
      products: [
        {
          id: 1,
          name: 'Focaccia',
          price: 5,
        },
        {
          id: 2,
          name: 'Multi Grain',
          price: 4,
        },
        {
          id: 3,
          name: 'Baguette',
          price: 2,
        },
      ],
    },
    {
      name: 'Donuts',
      products: [
        {
          id: 4,
          name: 'Glazed',
          price: 1.99,
        },
        {
          id: 5,
          name: 'Chocolate',
          price: 3.99,
        },
        {
          id: 6,
          name: 'Strawberry',
          price: 3.99,
        },
      ],
    },
    {
      name: 'Cakes',
      products: [
        {
          id: 7,
          name: 'Apple Pie',
          price: 10,
        },
        {
          id: 8,
          name: 'Cheese Cake',
          price: 15,
        },
        {
          id: 9,
          name: 'Tiramisu',
          price: 12,
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      {stockProducts.map((category, i) => (
        <ListItem
          key={i}
          item={category}
          handlePress={() => navigation.navigate('Products', category.products)}
          buttonText={'View products'}
        />
      ))}
    </View>
  );
};

export default Categories;
