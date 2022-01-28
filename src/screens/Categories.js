import {useDispatch, useSelector} from 'react-redux';

import ListItem from '../components/ListItem';
import React from 'react';
import {View} from 'react-native';
import {selectCategory} from '../store/actions/category.action';
import {styles} from '../styles/Global.styles';

const Categories = ({navigation}) => {
  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  const handlePress = id => {
    dispatch(selectCategory(id));
    navigation.navigate('Products');
  };

  return (
    <View style={styles.container}>
      {categories.map((category, i) => (
        <ListItem
          key={i}
          item={category}
          handlePress={() => handlePress(category.id)}
          buttonText={'View products'}
        />
      ))}
    </View>
  );
};

export default Categories;
