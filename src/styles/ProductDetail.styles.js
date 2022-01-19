import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
  },
  price: {
    fontSize: 25,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
