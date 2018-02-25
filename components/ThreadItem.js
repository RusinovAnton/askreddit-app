import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from '../styles';

const ThreadItem = ({ id, title, score, num_comments }) => {
  return (
    <View style={styles.threadItem}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingBottom: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: '#095499',
            paddingRight: 10,
            paddingBottom: 10,
          }}
        >
          {score}
        </Text>
        <Text style={{ fontSize: 16, flex: 1, flexWrap: 'wrap' }}>{title}</Text>
      </View>
      <Text style={{ color: '#676767', fontSize: 12 }}>
        {num_comments} comments
      </Text>
    </View>
  );
};

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ThreadItem;
