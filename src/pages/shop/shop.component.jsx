import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import Spinner from '../../components/spinner/spinner.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectiIsCollectionFetching } from '../../redux/shop/shop.selectors';

const CollectionPageWithSpinner = Spinner(CollectionPage);
const CollectionOverviewWithSpinner = Spinner(CollectionsOverview);
class ShopPage extends React.Component {

  componentDidMount(){
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetching } = this.props;
    return (
      <div className='shop-page' >
        <Route
          exact
          path={`${match.path}`}
          render={props => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionPageWithSpinner isLoading={isFetching} {...props} />}
        />
      </div>
    )
  }
}
const mapStateToPros = createStructuredSelector({
  isFetching: selectiIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToPros, mapDispatchToProps)(ShopPage);