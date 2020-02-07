import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import SuggestionsHeading from '../components/SuggestionsHeading';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestion from '../components/Suggestion';

class SuggestionsList extends Component {
  // Render empty message
  renderEmptyHandler = () => <Empty text="No suggestions available" />;

  itemSeparatorHandler = () => <Separator color="cyan" />;

  renderItemHandler = ({item}) => <Suggestion {...item} />;

  render() {
    // FlatList uses an array of literal objects in data and renders in renderItem
    const list = [
      {
        title: 'Avengers',
        key: '1',
      },
      {
        title: 'Pokémon',
        key: '2',
      },
    ];
    return (
      <SuggestionsHeading title="Recommended for you">
        <FlatList
          data={list}
          // if empty list, show this message :(
          ListEmptyComponent={this.renderEmptyHandler}
          // Separator component between items only
          ItemSeparatorComponent={this.itemSeparatorHandler}
          renderItem={this.renderItemHandler}
        />
      </SuggestionsHeading>
    );
  }
}

export default SuggestionsList;
