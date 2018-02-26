import React from 'react';
import {
  ThemeProvider,
  Toolbar,
  ToolbarAction,
  ToolbarBackAction,
  ToolbarContent,
} from 'react-native-paper';
import { Platform, Text, View, ScrollView, StyleSheet } from 'react-native';
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
      <ThemeProvider>
        <View style={StyleSheet.absoluteFill}>
          <AppToolbar />
          <ThreadList />
        </View>
      </ThemeProvider>
    );
  }
}
