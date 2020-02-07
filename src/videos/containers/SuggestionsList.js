import React from 'react';
import {FlatList} from 'react-native';
import SuggestionsHeading from '../components/SuggestionsHeading';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestion from '../components/Suggestion';

const SuggestionsList = ({list}) => {
  // Render empty message
  const renderEmptyHandler = () => <Empty text="No suggestions available" />;

  const itemSeparatorHandler = () => <Separator color="cyan" />;

  const renderItemHandler = ({item}) => <Suggestion {...item} />;

  // @TODO: SetState makes flatlist rerender and the data is inconsistent
  const keyExtractorHandler = ({item}) => item.id.toString();

  // FlatList uses an array of literal objects in data and renders in renderItem

  return (
    <SuggestionsHeading title="Recommended for you">
      <FlatList
        data={list}
        keyExtractor={keyExtractorHandler}
        // if empty list, show this message :(
        ListEmptyComponent={renderEmptyHandler}
        // Separator component between items only
        ItemSeparatorComponent={itemSeparatorHandler}
        renderItem={renderItemHandler}
      />
    </SuggestionsHeading>
  );
};

export default SuggestionsList;
