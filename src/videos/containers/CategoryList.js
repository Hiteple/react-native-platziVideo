import React from 'react';
import {FlatList} from 'react-native';
import Empty from '../components/Empty';
import HorizontalSeparator from '../../screens/components/HorizontalSeparator';
import Category from '../components/Category';
import CategoriesHeading from '../components/CategoriesHeading';
import {connect} from 'react-redux';

const CategoryList = ({categoryList}) => {
  const renderEmptyHandler = () => <Empty text="No Categories available" />;

  const itemSeparatorHandler = () => <HorizontalSeparator color="#ccc" />;

  const renderItemHandler = ({item}) => {
    return <Category {...item} />;
  };

  // We pass the index so we have unique keys
  const keyExtractorHandler = (item, index) => index.toString();

  return (
    <CategoriesHeading title="Categories">
      <FlatList
        horizontal
        data={categoryList}
        keyExtractor={keyExtractorHandler}
        // if empty list, show this message :(
        ListEmptyComponent={renderEmptyHandler}
        // Separator component between items only
        ItemSeparatorComponent={itemSeparatorHandler}
        renderItem={renderItemHandler}
      />
    </CategoriesHeading>
  );
};

const mapStateToProps = ({categories}) => {
  return {categoryList: categories};
};

export default connect(mapStateToProps, null)(CategoryList);
