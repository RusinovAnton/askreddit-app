import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  threadItem: {
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderLeftColor: '#ff9900',
    borderLeftWidth: 5,
    overflow: 'hidden',
    padding: 15,
  },
});

export default styles;
