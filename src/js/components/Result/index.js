import { connect } from 'react-redux';
import SearchResult from './SearchResult';

function mapStoreToProps(store) {
    return {
        weatherData: store.searched.weatherData
    };
}

export default connect(mapStoreToProps)(SearchResult);