import React from 'react';
import { Platform } from 'react-native';
import { Toolbar, ToolbarAction, ToolbarContent } from 'react-native-paper';

class AppToolbar extends React.Component {
  render() {
    return (
      <Toolbar statusBarHeight={Platform.OS === 'android' ? 20 : 0}>
        <ToolbarContent title="/r/Askreddit" dark />
        <ToolbarAction icon="more-vert" color="#fff" onPress={this._onMore} />
      </Toolbar>
    );
  }
}

export default AppToolbar;
