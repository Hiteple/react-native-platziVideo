import React from 'react';
import {FlatList} from 'react-native';
import SuggestionsHeading from '../components/SuggestionsHeading';
import Empty from '../components/Empty';
import Separator from '../../screens/components/Separator';
import Suggestion from '../components/Suggestion';
import {connect} from 'react-redux';

const SuggestionsList = ({suggestionList}) => {
  // Render empty message
  const renderEmptyHandler = () => <Empty text="No suggestions available" />;

  const itemSeparatorHandler = () => <Separator color="#ccc" />;

  const renderItemHandler = ({item}) => <Suggestion {...item} />;

  // We pass the index so we have unique keys
  const keyExtractorHandler = (item, index) => index.toString();

  // FlatList uses an array of literal objects in data and renders in renderItem

  return (
    <SuggestionsHeading title="Recommended for you">
      <FlatList
        data={suggestionList}
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

const mapStateToProps = ({suggestions}) => {
  return {suggestionList: suggestions};
};

export default connect(mapStateToProps, null)(SuggestionsList);
