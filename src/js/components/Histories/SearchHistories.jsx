import React from 'react';

export default class SearchHistories extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { history } = this.props;
        console.log(history);
        return (
            <div className='card border-alert-dark mb-3'>
                <div className='card-header text-white alert-dark'>Search History</div>
                <table className='table table-sm table-hover'>
                    <thead>
                        <tr>
                            <th></th>
                            <th style={{ width: 130 }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map((list, i) => (
                         <tr key= {new Date()+i}>
                             <td> { list.name }</td>
                             <td>{ list.day }<br/>{ list.time }</td>
                         </tr>   
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}