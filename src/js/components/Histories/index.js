import { connect } from 'react-redux';
import SearchHistories from './SearchHistories';
import moment from 'moment';

function mapStoreToProps (store) {
    return {
        history: store.searched.history
    };
}

export default connect(mapStoreToProps)(SearchHistories)