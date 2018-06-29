import axios from 'axios';

export function updateSearch(SearchEntries) {
  return {
    type: 'UPDATE_SEARCH',
    payload: {
      SearchEntries
    }
  };
}

export function searchGo(SearchEntries) {
  return {
    type: 'GO',
    payload: axios.get(`/searched/${SearchEntries}`)
  };
}
