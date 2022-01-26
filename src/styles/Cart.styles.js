import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    padding: 12,
    bottomTopColor: '#ccc',
    borderTopWidth: 1,
  },
  list: {
    flex: 1,
  },
  confirm: {
    backgroundColor: '#00a680',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  confirmText: {
    fontSize: 18,
    color: 'white',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    padding: 8,
    color: 'white',
  },
});
