import React from 'react';
import { Text, View } from 'react-native';
import uuid from 'uuid/v1';

import ThreadReply from './ThreadReply';

const ThreadRepliesList = ({ data, kind }) => {
  if (!data || kind === 'more') {
    return null;
  }

  return (
    <View>
      {data.children.map((reply) => <ThreadReply key={uuid()} {...reply} />)}
    </View>
  );
};

export default ThreadRepliesList;
