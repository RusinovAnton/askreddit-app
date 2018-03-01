import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  score: {
    fontSize: 20,
    color: '#2295ff',
    paddingRight: 10,
    paddingBottom: 10,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5,
  },
  title: { fontSize: 16, flex: 1, flexWrap: 'wrap', color: '#fff' },
  comments: { color: 'rgba(255,255,255, 0.7)', fontSize: 12 },
  body: {
    borderBottomColor: 'rgba(255,255,255, 0.7)',
    borderBottomWidth: 1,
    padding: 15,
  },
});

const ThreadScore = ({ children }) => (
  <Text style={styles.score}>{children}</Text>
);

const ThreadHeader = ({ children }) => (
  <View style={styles.header}>{children}</View>
);

const ThreadTitle = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

const ThreadComments = ({ num_comments }) => {
  return <Text style={styles.comments}>{num_comments} comments</Text>;
};

const ThreadItemBody = ({ children }) => (
  <View style={styles.body}>{children}</View>
);

const ThreadTouchableRipple = ({ children, ...props }) => (
  <TouchableRipple
    rippleColor="rgba(0, 0, 0, .32)"
    onPress={() => {}}
    {...props}
  >
    {children}
  </TouchableRipple>
);

class ThreadListItem extends React.Component {
  render() {
    const {
      created,
      hide_score,
      id,
      num_comments,
      permalink,
      score,
      title,
      url,
      visited,
    } = this.props;

    return (
      <Link to={`/thread?link=${permalink}`}>
        {/* <ThreadTouchableRipple> */}
        <ThreadItemBody>
          <ThreadHeader>
            <ThreadScore>{score}</ThreadScore>
            <ThreadTitle>{title}</ThreadTitle>
          </ThreadHeader>
          <ThreadComments num_comments={num_comments} />
        </ThreadItemBody>
        {/* </ThreadTouchableRipple> */}
      </Link>
    );
  }
}

ThreadListItem.propTypes = {
  created: PropTypes.number.isRequired,
  hide_score: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  permalink: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  visited: PropTypes.bool.isRequired,
};

export default ThreadListItem;
