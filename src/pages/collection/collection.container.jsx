import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Spinner from '../../components/spinner/spinner.component';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionPage);

export default CollectionPageContainer;
