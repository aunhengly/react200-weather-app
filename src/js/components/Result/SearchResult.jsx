import React from 'react';

export default class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { weatherData} = this.props;
        console.log('Hengly' + {weatherData});
        return (
            <div className='card border-alert-primary mb-3'>
                <div className='card-header text-primary alert-primary'>City Information</div>
                <div className='card-body text-center' id='result'>
                    {weatherData.name ? (
                        <div>
                        <h2 className='card-title text-center'><img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} />{weatherData.name}</h2>
                        <label>Lat/Long: {weatherData.coord.lat},{weatherData.coord.lon}</label>
                        <hr/>
                        <div className='row'>
                            <div className='col-4'>Temperature(F) <p className='card-title text-success'> {weatherData.main.temp}F</p></div>
                            <div className='col-4'>Pressure <p className='card-title text-success'> {weatherData.main.pressure}</p></div>
                            <div className='col-4'>Humidity <p className='card-title text-success'> {weatherData.main.humidity}%</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-4'>Lowest Temp(F) <p className='card-title text-success'> {weatherData.main.temp_min}</p></div>
                            <div className='col-4'>Highest Temp(F) <p className='card-title text-success'> {weatherData.main.temp_max}</p></div>
                            <div className='col-4'>Wind Speed <p className='card-title text-success'> {weatherData.wind.speed}mph</p></div>
                        </div>
                    </div>
                    ): (
                        <div>Hello! Entry Some City First.</div>
                    )}
                    
                </div>
            </div>
        );
    }
}