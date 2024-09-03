import axios from 'https://cdn.skypack.dev/axios';

const locationAlert = document.querySelector('#location');
const weatherAlert = document.querySelector('#weather');
const errorAlert = document.querySelector('#error');

function showError(msg) {
    errorAlert.textContent = `Error: ${msg}`;
    errorAlert.style.display = 'block';
}

function showLocation(lat, long, addr) {
    locationAlert.innerHTML = `
        <h4>Latitude: ${lat}, 
        Longitude: ${long}, 
        Address: ${addr}</h4>
    `;
    locationAlert.style.display = 'block';
}

function getCurrentlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;

                console.log(`Latitude: ${lat}, longitude: ${long}`);

                if (lat && long) {
                    const address = await fetchAddress(lat, long);
                    showLocation(lat, long, address);
                    fetchweather(lat, long);
                } else {
                    showError('Location data is incomplete');
                }
            },
            (err) => {
                showError('Geolocation error: ' + err.message);
            }
        );
    } else {
        showError('Geolocation is not supported by this browser');
    }
}

async function fetchAddress(lat, long) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`;

    try {
        const response = await axios.get(url);
        const { country, city, borough } = response.data.address;
        const addr = `${country},${city},${borough}`;
        return addr;
    } catch (error) {
        showError('주소 가저오기 실패' + error.message);
        return "Unknown Location";
    }
}


async function fetchweather(lat, long) {
    console.log(lat, long);
    const url = `https://api.openweathermap.org/data/2.8/onecall?lat=37.5390833&lon=126.9023575&exclude=hourly,daily,minutely&appid=914e1465c548461b56f6e859bdc75f93`;
    try {
        const response = await axios.get(url);
        console.log(response.data);

        const { timezone } = response.data;
        const { temp } = response.data.current;
        const { description, icon } = response.data.current.weather[0];

        showWeather(timezone, temp, description, icon);
        // weatherAlert.innerHTML = `<h4>${timezone},${temp},${description},${icon}</h3>`;
        // weatherAlert.style.display = 'block';

    } catch (error) {
        showError(error.message);
    }
}

function showWeather(timezone, temp, description, icon) {
    const cw = temp - 273.15; //섭씨로 변환
    weatherAlert.innerHTML = `
        <h4>Timezone: ${timezone}</h4>
        <h4>Tempatature: ${cw.toFixed(2)}</h4>
        <h4>Description: ${description}</h4>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
    `;

    weatherAlert.style.display = 'block';
}
document.addEventListener('DOMContentLoaded', getCurrentlocation);
