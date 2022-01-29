import {Image, Pressable, Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import productStyles from '../styles/ProductDetail.styles';
import {useSelector} from 'react-redux';

const ProductDetail = () => {
  const product = useSelector(state => state.products.selected);

  const handleAddToCart = () => {
    console.log('add', product);
  };

  return (
    <View style={productStyles.container}>
      <Image
        style={productStyles.photo}
        resizeMode="cover"
        source={{
          uri: `https://dummyimage.com/600x600/ddbea9/6b705c&text=${product.name}`,
        }}
      />
      <View>
        <Text style={productStyles.title}>{product.name}</Text>
        <Text style={productStyles.description}>{product.description}</Text>
        <Text style={productStyles.price}>$ {product.price}</Text>
      </View>
      <Pressable
        onPress={() => handleAddToCart()}
        style={({pressed}) =>
          pressed ? productStyles.buttonPressed : productStyles.button
        }>
        <Ionicons name="ios-cart" size={24} color="#ffe8d6" />
        <Text style={productStyles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetail;
