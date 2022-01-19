import {Pressable, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import ListItem from '../components/ListItem';
import {styles} from '../styles/Global.styles';

const Products = ({route, navigation}) => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    setProducts(route.params);
  }, []);
  return (
    <View style={styles.container}>
      {products.map((product, i) => (
        <ListItem
          key={i}
          item={product}
          handlePress={() => navigation.navigate('ProductDetail', product)}
          buttonText={'View details'}
        />
      ))}
    </View>
  );
};

export default Products;
