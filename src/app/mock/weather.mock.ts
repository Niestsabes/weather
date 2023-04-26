import { Weather } from "../shared/models/weather.interface";

export const WEATHER_MOCK: Weather = {
    "coord": {
        "lon": 4.5833,
        "lat": 45.75
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 283.7,
        "feels_like": 282.77,
        "temp_min": 282.87,
        "temp_max": 286.18,
        "pressure": 1009,
        "humidity": 75
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.23,
        "deg": 177,
        "gust": 7.55
    },
    "clouds": {
        "all": 100
    },
    "dt": 1682147783,
    "sys": {
        "type": 2,
        "id": 2007821,
        "country": "FR",
        "sunrise": 1682138655,
        "sunset": 1682188552
    },
    "timezone": 7200,
    "id": 2996943,
    "name": "Lyon",
    "cod": 200
}