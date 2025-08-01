import './Current.css';

const CurrentWeather=()=>{
return (
    <div className='crt-weather-card'>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.10/css/weather-icons.min.css"></link>

        <div className='crt-box'>
            <p className='crt-city'>current weather</p>
            <i className='wi wi-solar-eclipse icon'></i>
            <p className='crt-weather'>45 'C</p>
        <p className='crt-time'>12:00 am</p>
        
        </div>

    </div>
);
}
export default CurrentWeather;