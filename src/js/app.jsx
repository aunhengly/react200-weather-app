import React from 'react';
import SearchEntries from './components/Search/';
import AddOn from './components/AddOn'
import SearchResult from './components/Result';
import SearchHistories from './components/Histories';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3 text-center'>Origin Weather Application</h1>
          <h6>Always know if you'll need an umbrella!</h6>
        </div>
        <div className='row'>
          <AddOn />
          <SearchEntries />
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <SearchResult />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistories />
          </div>
        </div>
      </div>
    );
  }
}
