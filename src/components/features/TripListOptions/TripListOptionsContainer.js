import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeSearchDuration, addSearchTags, removeSearchTags} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeSearchDuration: (type, value) => dispatch(changeSearchDuration(type, value)),
  addSearchTags: tag => dispatch(addSearchTags(tag)),
  removeSearchTags: tag => dispatch(removeSearchTags(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
