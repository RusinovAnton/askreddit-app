import React from 'react';
import { Platform, Text, View, ScrollView, StyleSheet } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import {
  DefaultTheme,
  Provider as PaperThemeProvider,
  Toolbar,
  ToolbarAction,
  ToolbarBackAction,
  ToolbarContent,
} from 'react-native-paper';

import AppToolbar from './components/AppToolbar';
import Thread from './components/Thread';
import ThreadList from './components/ThreadList';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: 0,
    };
  }

  render() {
    return (
      <NativeRouter>
        <PaperThemeProvider
          theme={{
            ...DefaultTheme,
            dark: true,
            colors: {
              ...DefaultTheme.colors,
              accent: '#ff4400',
              background: '#000000',
              primary: '#343454',
              text: '#ffffff',
            },
          }}
        >
          <View style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: '#222233',
          }}>
            <AppToolbar />
            <Route exact path="/" component={ThreadList} />
            <Route path="/thread" component={Thread} />
          </View>
        </PaperThemeProvider>
      </NativeRouter>
    );
  }
}

export default App;
