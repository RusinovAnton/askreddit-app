import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-paper';

import ThreadListItem from './ThreadListItem';
import api from '../modules/RedditApi';

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 70,
  },
});

const ThreadListFooter = ({ children }) => {
  return <View style={styles.footer}>{children}</View>;
};

class ThreadList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      after: null,
      isLoading: false,
      items: [],
      error: null,
    };

    this.fetchAskredditThreadList = this.fetchAskredditThreadList.bind(this);
  }

  componentDidMount() {
    this.fetchAskredditThreadList();
  }

  async fetchAskredditThreadList(params) {
    this.setState({ isLoading: true });
    try {
      const data = await api.threadList(params);

      this.setState({ isLoading: false, error: null });
      this.updateThreadList(data);
    } catch (error) {
      console.error(error);
      this.setState({ error: error.toString(), isLoading: false });
    }
  }

  updateThreadList = ({ data }) => {
    const { children, after, before } = data;

    const items = data.children.reduce(
      (result, thread) => {
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
      },
      [...this.state.items],
    );

    this.setState({ after, items });
  };

  loadMore = () => {
    this.fetchAskredditThreadList({ after: this.state.after });
  };

  loadMoreButtonLabel = () => {
    const { after, isLoading } = this.state;

    let label = '';

    if (isLoading) {
      label = 'Loading...';
    } else if (!!after) {
      label = 'Load more';
    }

    return label;
  };

  render() {
    const { after, items, error, isLoading } = this.state;

    if (error) {
      return <Text>{error}</Text>;
    }

    return (
      <ScrollView>
        {items.map((thread) => <ThreadListItem key={thread.id} {...thread} />)}
        <ThreadListFooter>
          <Button
            disabled={isLoading}
            loading={isLoading}
            onPress={this.loadMore}
          >
            {this.loadMoreButtonLabel()}
          </Button>
        </ThreadListFooter>
      </ScrollView>
    );
  }
}

export default ThreadList;
