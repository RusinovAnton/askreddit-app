import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Paper } from 'react-native-paper';
import qs from 'qs';

import api from '../modules/RedditApi';

import ThreadRepliesList from './ThreadRepliesList';

const ThreadHeader = ({ author, title }) => {
  return (
    <View
      style={{
        borderBottomColor: 'rgba(255,255,255, 0.7)',
        borderBottomWidth: 1,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
      }}
    >
      <Text
        style={{
          marginBottom: 3,
          color: 'rgba(255,255,255, 0.7)',
        }}
      >
        /u/{author}
      </Text>
      <Text style={{ fontSize: 16, color: '#fff' }}>{title}</Text>
    </View>
  );
};

class Thread extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      after: null,
      replies: [],
      meta: {},
    };

    this.updateThreadData = this.updateThreadData.bind(this);
  }

  componentDidMount() {
    const query = qs.parse(this.props.location.search.slice(1));

    api.thread(query.link).then(this.updateThreadData);
  }

  updateThreadData(thread) {
    const [meta, replies] = thread;

    this.setState({
      after: replies.data.after,
      replies,
      meta: meta.data.children[0].data,
    });
  }

  render() {
    const { after, replies, meta } = this.state;

    return (
      <ScrollView>
        <ThreadHeader {...meta} />
        <ThreadRepliesList {...replies} />
      </ScrollView>
    );
  }
}

export default Thread;
