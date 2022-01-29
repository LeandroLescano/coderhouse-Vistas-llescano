import {StyleSheet} from 'react-native';
import {styles} from '../styles/Global.styles';

export default StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    ...styles.button,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonPressed: {
    ...styles.buttonPressed,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    ...styles.buttonText,
    marginLeft: 10,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  price: {
    fontSize: 25,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
});
