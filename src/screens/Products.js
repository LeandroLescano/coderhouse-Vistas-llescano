import React, {useEffect} from 'react';
import {filteredProducts, selectProduct} from '../store/actions/product.action';

import ListItem from '../components/ListItem';
import {View} from 'react-native';
import {styles} from '../styles/Global.styles';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const Products = ({navigation}) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.filteredProducts);
  const category = useSelector(state => state.categories.selected);

  useEffect(() => {
    dispatch(filteredProducts(category.id));
  }, [category]);

  const handlePress = id => {
    dispatch(selectProduct(id));
    navigation.navigate('ProductDetail');
  };

  return (
    <View style={styles.container}>
      {products.map((product, i) => (
        <ListItem
          key={i}
          item={product}
          handlePress={() => handlePress(product.id)}
          buttonText={'View details'}
        />
      ))}
    </View>
  );
};

export default Products;
