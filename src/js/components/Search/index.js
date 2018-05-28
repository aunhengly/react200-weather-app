import { connect } from 'react-redux';
import SearchEntries from './SearchEntries';


function mapStoreToProps (store) {
    return {
        searched: store.searched
    };
}

export default connect(mapStoreToProps)(SearchEntries);