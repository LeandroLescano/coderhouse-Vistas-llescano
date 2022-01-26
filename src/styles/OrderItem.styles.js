import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  date: {
    fontSize: 18,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
