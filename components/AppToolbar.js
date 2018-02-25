import React from 'react';
import { Platform } from 'react-native';
import {
  Toolbar,
  ToolbarAction,
  ToolbarContent,
  TouchableRipple,
} from 'react-native-paper';

class AppToolbar extends React.Component {
  render() {
    return (
      <Toolbar statusBarHeight={Platform.OS === 'android' ? 20 : 0}>
        <ToolbarContent title="/r/Askreddit" dark />
        <ToolbarAction icon="more-vert" dark />
      </Toolbar>
    );
  }
}

export default AppToolbar;
