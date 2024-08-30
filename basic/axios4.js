function getCurrentlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;

                console.log(`Latitude: ${lat}, longitude: ${long}`);

                if (lat && long) {
                    // id가 result인 곳에 위도 경도 출력
                    const result = document.querySelector('#result');
                    result.innerHTML = `<h3>위도: ${lat}, 경도: ${long}</h3>`
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

};

function showError(message) {
    alert(message);
}