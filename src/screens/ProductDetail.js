import {Image, Text, View} from 'react-native';

import React from 'react';
import productStyles from '../styles/ProductDetail.styles';

const ProductDetail = ({route}) => {
  const product = route.params;

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
        <Text style={productStyles.price}>$ {product.price}</Text>
      </View>
    </View>
  );
};

export default ProductDetail;
