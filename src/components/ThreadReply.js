import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import ThreadRepliesList from './ThreadRepliesList';

class ThreadReply extends React.Component {
  state = {
    showMore: this.props.data.depth !== 0,
    error: null,
  };

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  onReplyPress = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  calculateDepthMargin = () => {
    const depth = this.props.data.depth || 0;
    let depthMargin = depth * 3;
    depthMargin >= 15 ? 15 : depthMargin;

    return depthMargin;
  };

  render() {
    if (this.state.error) {
      return (
        <Text style={{ backgroundColor: '#fc0', color: '#000', padding: 10 }}>
          {error}
        </Text>
      );
    }

    const { kind, data } = this.props;

    if (!data || kind !== 't1') {
      return null;
    }

    const { author, body, id, replies, gilded } = data;
    const showReplies = !!replies && this.state.showMore;

    return (
      <View
        style={{
          marginLeft: this.calculateDepthMargin(),
          borderBottomColor: 'rgba(255,255,255, 0.7)',
          borderBottomWidth: 1,
          padding: 15,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginBottom: 3,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'rgba(255,255,255, 0.7)' }}>/u/{author}</Text>
          {!!gilded && (
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: '#f90',
                borderRadius: 10,
                marginLeft: 5,
              }}
            />
          )}
        </View>
        <Text style={{ fontSize: 16, color: '#fff' }}>{body}</Text>
        {!!replies &&
          !this.state.showMore && (
            <Text
              onPress={this.onReplyPress}
              style={{ marginTop: 5, color: 'rgba(255,255,255,0.7)' }}
            >
              Show more replies
            </Text>
          )}
        {showReplies && <ThreadRepliesList {...replies} />}
      </View>
    );
  }
}

const ReplyPropType = PropTypes.shape({
  data: PropTypes.shape({ children: PropTypes.array.isRequired }).isRequired,
});

ThreadReply.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  depth: PropTypes.number,
  id: PropTypes.string,
  replies: PropTypes.oneOfType([PropTypes.string, ReplyPropType]),
};

export default ThreadReply;
