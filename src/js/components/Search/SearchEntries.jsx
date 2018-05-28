import React from 'react';
import { updateSearch, searchGo } from './searchAction';

export default class SearchEntries extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearchEntries = this.handleSearchEntries.bind(this);
        this.handleGo = this.handleGo.bind(this);
    }

    handleSearchEntries(event){
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateSearch(value));
    }
    
    handleGo(){
        // console.log(this.props)
        const { searched, dispatch } = this.props;
        dispatch(searchGo(searched.SearchEntries));
    }

    render() {
        const { SearchEntries } = this.props;
        return (
            <div className='container'>
                <div className='input-group mb-3'>
                    <input type='text' className='form-control' placeholder="Type City's name" id='search-input' value={SearchEntries} onChange={this.handleSearchEntries}/>
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' type='button' onClick={this.handleGo}>Go!</button>
                    </div>
                </div>
            </div>
        );

    }
}