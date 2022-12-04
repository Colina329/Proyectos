let clima = {
    apiKey: "f7a5d0595175b82ca49d4e8b0c652e6c",
    fetchClima: function (ciudad) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + ciudad
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => this.mostrarClima(data));
    },
    mostrarClima: function (data) {
        const { temp } = data.main;
        document.querySelector("#temp").innerHTML = temp + "&#8451;"
    }

}

let ciudad = document.querySelector("#ciudad");
ciudad.addEventListener("change", function () {
    clima.fetchClima(ciudad.value)
})
clima.fetchClima("Buenos Aires");