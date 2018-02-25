import React from 'react';
import { ScrollView } from 'react-native';

import ThreadItem from './ThreadItem';

class ThreadList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.fetchAskredditThreadList();
  }

  fetchAskredditThreadList = () => {
    fetch('https://www.reddit.com/r/AskReddit/.json')
      .then(res => res.json())
      .then(this.updateThreadList)
      .catch(console.error);
  };

  updateThreadList = ({ data }) => {
    const items = data.children.reduce((result, thread) => {
      if (!thread.kind) {
        return result;
      }

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
      } = thread.data;

      return result.concat({
        created,
        hide_score,
        id,
        num_comments,
        permalink,
        score,
        title,
        url,
        visited,
      });
    }, []);

    this.setState({ items });
  };

  render() {
    const { items, error } = this.state;

    if (error) {
      return <Text>{error}</Text>;
    }

    return (
      <ScrollView>
        {items.map(thread => <ThreadItem key={thread.id} {...thread} />)}
      </ScrollView>
    );
  }
}

export default ThreadList;
