fetch('https://raw.githubusercontent.com/zemirco/sf-city-lots-json/master/citylots.json')
    .then(res => res.json())
    .then(data => cycle(data))

function cycle(data) {
    for (i = 0; i < data.features.length; i++) {
        const street = data.features[i].properties.STREET;
        console.log(street);
    }
}