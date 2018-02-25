import React from 'react';
import {
  ThemeProvider,
  Toolbar,
  ToolbarAction,
  ToolbarBackAction,
  ToolbarContent,
  DrawerSection,
  DrawerItem,
} from 'react-native-paper';
import { Platform, Text, View, ScrollView } from 'react-native';
import ThreadList from './components/ThreadList';
import styles, { theme } from './styles';
import AppToolbar from './components/AppToolbar';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: 0,
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <View>
          <AppToolbar />
          <ThreadList />
        </View>
      </ThemeProvider>
    );
  }
}
