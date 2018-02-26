import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import styles from '../styles';

const ThreadScore = ({ children }) => {
  return (
    <Text
      style={{
        fontSize: 20,
        color: '#095499',
        paddingRight: 10,
        paddingBottom: 10,
      }}
    >
      {children}
    </Text>
  );
};

const ThreadHeader = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 5,
      }}
    >
      {children}
    </View>
  );
};

const ThreadTitle = ({ children }) => {
  return (
    <Text style={{ fontSize: 16, flex: 1, flexWrap: 'wrap' }}>{children}</Text>
  );
};

const ThreadComments = ({ num_comments }) => {
  return (
    <Text style={{ color: '#676767', fontSize: 12 }}>
      {num_comments} comments
    </Text>
  );
};

const ThreadItemBody = ({ children }) => {
  return (
    <View
      style={{
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderLeftColor: '#ff9900',
        borderLeftWidth: 5,
        padding: 15,
      }}
    >
      {children}
    </View>
  );
};

const ThreadTouchableRipple = ({ children }) => {
  return (
    <TouchableRipple onPress={() => {}} rippleColor="rgba(0, 0, 0, .32)">
      {children}
    </TouchableRipple>
  );
};

const ThreadListItem = ({ id, title, score, num_comments }) => {
  return (
    <ThreadTouchableRipple>
      <ThreadItemBody>
        <ThreadHeader>
          <ThreadScore>{score}</ThreadScore>
          <ThreadTitle>{title}</ThreadTitle>
        </ThreadHeader>
        <ThreadComments num_comments={num_comments} />
      </ThreadItemBody>
    </ThreadTouchableRipple>
  );
};

ThreadListItem.propTypes = {
  id: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ThreadListItem;
