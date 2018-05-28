import { combineReducers } from 'redux';
import searchReducer from './components/Search/searchReducer';

const rootReducer = combineReducers({
    searched: searchReducer
});

export default rootReducer;
