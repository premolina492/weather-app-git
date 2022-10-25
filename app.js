function formantDate(date) {
let hours = date.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}
let minutes = date.getMinutues();
if (minutes < 10) {
    minutes = `0${minutes}`;
}

let dayIndex = date.getDay();
let days = [
    "Sun", 
    "Mon", 
    "Tue", 
    "Wed", 
    "Thu", 
    "Fri", 
    "Sat"
];
let day = days[dayIndex];

return `${day} ${hours}:${minutes}`;
}

function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let cityInput = document.querySelector("#city-input");
    cityElement.innerHTML = cityInput.ariaValueMax;
}



let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
