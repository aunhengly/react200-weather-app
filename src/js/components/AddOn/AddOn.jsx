import React from 'react';
import { searchGo } from '../Search/searchAction';
// import { updateSearch, searchGo } from '../Search/searchAction';
export default class AddOn extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    // console.log(this.props);
    const { dispatch } = this.props;
    dispatch(searchGo(e.target.name));
  }

  render() {
    return (
      <div className='container'>
        <div className='btn-group' role='group'>
          {/* <button type="button" className="btn btn-primary btn-sm" onClick={()=>{this.handleClick("San Diego")}}>San Diego</button> */}
          <button type='button' name='San Diego' className='btn btn-primary btn-sm' onClick={ this.handleClick }>San Diego</button>
          <button type='button' name='New York' className='btn btn-primary btn-sm' onClick={ this.handleClick }>New York</button>
          <button type='button' name='Washington' className='btn btn-primary btn-sm' onClick={ this.handleClick }>Washing D.C</button>
          <button type='button' name='London' className='btn btn-primary btn-sm' onClick={ this.handleClick }>London</button>
          <button type='button' name='Tokyo' className='btn btn-primary btn-sm' onClick={ this.handleClick }>Tokyo</button>
          <button type='button' name='Phnom Penh' className='btn btn-primary btn-sm' onClick={ this.handleClick }>Phnom Penh</button>
        </div>
      </div>
    );
  }
}
