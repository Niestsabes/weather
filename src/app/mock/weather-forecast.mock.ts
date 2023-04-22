import { WeatherForecast } from "../shared/models/weather.interface";

export const WEATHER_FORECAST_MOCK: WeatherForecast = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1682164800,
            "main": {
                "temp": 286.78,
                "feels_like": 286.08,
                "temp_min": 286.78,
                "temp_max": 290.45,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 948,
                "humidity": 72,
                "temp_kf": -3.67
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.43,
                "deg": 184,
                "gust": 7.28
            },
            "visibility": 10000,
            "pop": 0.04,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-22 12:00:00"
        },
        {
            "dt": 1682175600,
            "main": {
                "temp": 287.64,
                "feels_like": 286.95,
                "temp_min": 287.64,
                "temp_max": 288.98,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 947,
                "humidity": 69,
                "temp_kf": -1.34
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.76,
                "deg": 170,
                "gust": 5.77
            },
            "visibility": 10000,
            "pop": 0.32,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-22 15:00:00"
        },
        {
            "dt": 1682186400,
            "main": {
                "temp": 283.48,
                "feels_like": 283.1,
                "temp_min": 283.48,
                "temp_max": 283.48,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 948,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.92,
                "deg": 343,
                "gust": 3.52
            },
            "visibility": 10000,
            "pop": 0.63,
            "rain": {
                "3h": 1.58
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-22 18:00:00"
        },
        {
            "dt": 1682197200,
            "main": {
                "temp": 282.26,
                "feels_like": 282.26,
                "temp_min": 282.26,
                "temp_max": 282.26,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 950,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 0.46,
                "deg": 63,
                "gust": 0.77
            },
            "visibility": 10000,
            "pop": 0.89,
            "rain": {
                "3h": 2.21
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-22 21:00:00"
        },
        {
            "dt": 1682208000,
            "main": {
                "temp": 281.2,
                "feels_like": 281.2,
                "temp_min": 281.2,
                "temp_max": 281.2,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 950,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 0.84,
                "deg": 94,
                "gust": 1.01
            },
            "visibility": 10000,
            "pop": 0.89,
            "rain": {
                "3h": 3.42
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-23 00:00:00"
        },
        {
            "dt": 1682218800,
            "main": {
                "temp": 281.05,
                "feels_like": 281.05,
                "temp_min": 281.05,
                "temp_max": 281.05,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 949,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 72
            },
            "wind": {
                "speed": 0.9,
                "deg": 133,
                "gust": 1.11
            },
            "visibility": 10000,
            "pop": 0.35,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-23 03:00:00"
        },
        {
            "dt": 1682229600,
            "main": {
                "temp": 281.75,
                "feels_like": 281.75,
                "temp_min": 281.75,
                "temp_max": 281.75,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 948,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 83
            },
            "wind": {
                "speed": 1.32,
                "deg": 161,
                "gust": 2.54
            },
            "visibility": 10000,
            "pop": 0.29,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-23 06:00:00"
        },
        {
            "dt": 1682240400,
            "main": {
                "temp": 287.99,
                "feels_like": 287.23,
                "temp_min": 287.99,
                "temp_max": 287.99,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 947,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 78
            },
            "wind": {
                "speed": 2.89,
                "deg": 183,
                "gust": 6.82
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-23 09:00:00"
        },
        {
            "dt": 1682251200,
            "main": {
                "temp": 290.35,
                "feels_like": 289.46,
                "temp_min": 290.35,
                "temp_max": 290.35,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 947,
                "humidity": 51,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 4.37,
                "deg": 236,
                "gust": 9.37
            },
            "visibility": 10000,
            "pop": 0.36,
            "rain": {
                "3h": 0.17
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-23 12:00:00"
        },
        {
            "dt": 1682262000,
            "main": {
                "temp": 289.19,
                "feels_like": 288.39,
                "temp_min": 289.19,
                "temp_max": 289.19,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 947,
                "humidity": 59,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 4.93,
                "deg": 242,
                "gust": 10.97
            },
            "visibility": 10000,
            "pop": 0.6,
            "rain": {
                "3h": 0.21
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-23 15:00:00"
        },
        {
            "dt": 1682272800,
            "main": {
                "temp": 285.28,
                "feels_like": 284.3,
                "temp_min": 285.28,
                "temp_max": 285.28,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 946,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 2.87,
                "deg": 247,
                "gust": 8.28
            },
            "visibility": 10000,
            "pop": 0.48,
            "rain": {
                "3h": 0.29
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-23 18:00:00"
        },
        {
            "dt": 1682283600,
            "main": {
                "temp": 280.63,
                "feels_like": 279.07,
                "temp_min": 280.63,
                "temp_max": 280.63,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 948,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 81
            },
            "wind": {
                "speed": 2.4,
                "deg": 220,
                "gust": 7.21
            },
            "visibility": 10000,
            "pop": 0.57,
            "rain": {
                "3h": 0.4
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-23 21:00:00"
        },
        {
            "dt": 1682294400,
            "main": {
                "temp": 280.01,
                "feels_like": 278.49,
                "temp_min": 280.01,
                "temp_max": 280.01,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 948,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 2.21,
                "deg": 228,
                "gust": 7.27
            },
            "visibility": 10000,
            "pop": 0.53,
            "rain": {
                "3h": 0.17
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-24 00:00:00"
        },
        {
            "dt": 1682305200,
            "main": {
                "temp": 280.63,
                "feels_like": 280.63,
                "temp_min": 280.63,
                "temp_max": 280.63,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 949,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 66
            },
            "wind": {
                "speed": 1.19,
                "deg": 237,
                "gust": 1.8
            },
            "visibility": 10000,
            "pop": 0.2,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-24 03:00:00"
        },
        {
            "dt": 1682316000,
            "main": {
                "temp": 279.4,
                "feels_like": 277.7,
                "temp_min": 279.4,
                "temp_max": 279.4,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 950,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 66
            },
            "wind": {
                "speed": 2.3,
                "deg": 309,
                "gust": 8.87
            },
            "visibility": 10000,
            "pop": 0.33,
            "rain": {
                "3h": 0.35
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-24 06:00:00"
        },
        {
            "dt": 1682326800,
            "main": {
                "temp": 283.21,
                "feels_like": 281.81,
                "temp_min": 283.21,
                "temp_max": 283.21,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 952,
                "humidity": 59,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 11
            },
            "wind": {
                "speed": 3.02,
                "deg": 305,
                "gust": 5
            },
            "visibility": 10000,
            "pop": 0.09,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-24 09:00:00"
        },
        {
            "dt": 1682337600,
            "main": {
                "temp": 285.55,
                "feels_like": 284.05,
                "temp_min": 285.55,
                "temp_max": 285.55,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 952,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 34
            },
            "wind": {
                "speed": 2.54,
                "deg": 306,
                "gust": 4.51
            },
            "visibility": 10000,
            "pop": 0.01,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-24 12:00:00"
        },
        {
            "dt": 1682348400,
            "main": {
                "temp": 286.31,
                "feels_like": 284.83,
                "temp_min": 286.31,
                "temp_max": 286.31,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 951,
                "humidity": 44,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.97,
                "deg": 325,
                "gust": 5.17
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-24 15:00:00"
        },
        {
            "dt": 1682359200,
            "main": {
                "temp": 282.36,
                "feels_like": 281.94,
                "temp_min": 282.36,
                "temp_max": 282.36,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 951,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.46,
                "deg": 10,
                "gust": 2.64
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-24 18:00:00"
        },
        {
            "dt": 1682370000,
            "main": {
                "temp": 281.48,
                "feels_like": 281.48,
                "temp_min": 281.48,
                "temp_max": 281.48,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 951,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 0.37,
                "deg": 359,
                "gust": 0.47
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-24 21:00:00"
        },
        {
            "dt": 1682380800,
            "main": {
                "temp": 280.33,
                "feels_like": 280.33,
                "temp_min": 280.33,
                "temp_max": 280.33,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 950,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 1.26,
                "deg": 319,
                "gust": 2.03
            },
            "visibility": 10000,
            "pop": 0.25,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-25 00:00:00"
        },
        {
            "dt": 1682391600,
            "main": {
                "temp": 279.69,
                "feels_like": 279.69,
                "temp_min": 279.69,
                "temp_max": 279.69,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 950,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.19,
                "deg": 319,
                "gust": 2.84
            },
            "visibility": 10000,
            "pop": 0.55,
            "rain": {
                "3h": 0.33
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-25 03:00:00"
        },
        {
            "dt": 1682402400,
            "main": {
                "temp": 279.73,
                "feels_like": 279.73,
                "temp_min": 279.73,
                "temp_max": 279.73,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 950,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 0.68,
                "deg": 262,
                "gust": 1.24
            },
            "visibility": 10000,
            "pop": 0.44,
            "rain": {
                "3h": 0.42
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-25 06:00:00"
        },
        {
            "dt": 1682413200,
            "main": {
                "temp": 282.2,
                "feels_like": 280.99,
                "temp_min": 282.2,
                "temp_max": 282.2,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 951,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.3,
                "deg": 323,
                "gust": 3.71
            },
            "visibility": 10000,
            "pop": 0.27,
            "rain": {
                "3h": 0.23
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-25 09:00:00"
        },
        {
            "dt": 1682424000,
            "main": {
                "temp": 285.65,
                "feels_like": 284.23,
                "temp_min": 285.65,
                "temp_max": 285.65,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 951,
                "humidity": 49,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.23,
                "deg": 331,
                "gust": 4.48
            },
            "visibility": 10000,
            "pop": 0.45,
            "rain": {
                "3h": 0.4
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-25 12:00:00"
        },
        {
            "dt": 1682434800,
            "main": {
                "temp": 285.27,
                "feels_like": 283.9,
                "temp_min": 285.27,
                "temp_max": 285.27,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 951,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 3.8,
                "deg": 6,
                "gust": 4.97
            },
            "visibility": 10000,
            "pop": 0.33,
            "rain": {
                "3h": 0.1
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-25 15:00:00"
        },
        {
            "dt": 1682445600,
            "main": {
                "temp": 281.65,
                "feels_like": 279.87,
                "temp_min": 281.65,
                "temp_max": 281.65,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 952,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 90
            },
            "wind": {
                "speed": 2.98,
                "deg": 28,
                "gust": 6.19
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-25 18:00:00"
        },
        {
            "dt": 1682456400,
            "main": {
                "temp": 277.79,
                "feels_like": 277.79,
                "temp_min": 277.79,
                "temp_max": 277.79,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 953,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.22,
                "deg": 330,
                "gust": 2.42
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-25 21:00:00"
        },
        {
            "dt": 1682467200,
            "main": {
                "temp": 276.44,
                "feels_like": 276.44,
                "temp_min": 276.44,
                "temp_max": 276.44,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 953,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 0.99,
                "deg": 300,
                "gust": 1.37
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-26 00:00:00"
        },
        {
            "dt": 1682478000,
            "main": {
                "temp": 275.31,
                "feels_like": 275.31,
                "temp_min": 275.31,
                "temp_max": 275.31,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 952,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 91
            },
            "wind": {
                "speed": 0.62,
                "deg": 285,
                "gust": 0.54
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-26 03:00:00"
        },
        {
            "dt": 1682488800,
            "main": {
                "temp": 277.01,
                "feels_like": 277.01,
                "temp_min": 277.01,
                "temp_max": 277.01,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 953,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 70
            },
            "wind": {
                "speed": 0.49,
                "deg": 52,
                "gust": 1.07
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-26 06:00:00"
        },
        {
            "dt": 1682499600,
            "main": {
                "temp": 283.28,
                "feels_like": 281.73,
                "temp_min": 283.28,
                "temp_max": 283.28,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 953,
                "humidity": 53,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 1.09,
                "deg": 65,
                "gust": 0.73
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-26 09:00:00"
        },
        {
            "dt": 1682510400,
            "main": {
                "temp": 287.94,
                "feels_like": 286.62,
                "temp_min": 287.94,
                "temp_max": 287.94,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 952,
                "humidity": 44,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 1.3,
                "deg": 54,
                "gust": 2.67
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-26 12:00:00"
        },
        {
            "dt": 1682521200,
            "main": {
                "temp": 288.32,
                "feels_like": 287.17,
                "temp_min": 288.32,
                "temp_max": 288.32,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 951,
                "humidity": 49,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 1.49,
                "deg": 58,
                "gust": 1.97
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-26 15:00:00"
        },
        {
            "dt": 1682532000,
            "main": {
                "temp": 284.62,
                "feels_like": 283.57,
                "temp_min": 284.62,
                "temp_max": 284.62,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 952,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 0.9,
                "deg": 101,
                "gust": 0.83
            },
            "visibility": 10000,
            "pop": 0.03,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-26 18:00:00"
        },
        {
            "dt": 1682542800,
            "main": {
                "temp": 282.82,
                "feels_like": 282.82,
                "temp_min": 282.82,
                "temp_max": 282.82,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 953,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 86
            },
            "wind": {
                "speed": 0.42,
                "deg": 355,
                "gust": 0.9
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-26 21:00:00"
        },
        {
            "dt": 1682553600,
            "main": {
                "temp": 280.25,
                "feels_like": 280.25,
                "temp_min": 280.25,
                "temp_max": 280.25,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 952,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 93
            },
            "wind": {
                "speed": 0.6,
                "deg": 272,
                "gust": 0.7
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-27 00:00:00"
        },
        {
            "dt": 1682564400,
            "main": {
                "temp": 279.85,
                "feels_like": 279.85,
                "temp_min": 279.85,
                "temp_max": 279.85,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 952,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 0.44,
                "deg": 233,
                "gust": 0.47
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-04-27 03:00:00"
        },
        {
            "dt": 1682575200,
            "main": {
                "temp": 281.44,
                "feels_like": 281.44,
                "temp_min": 281.44,
                "temp_max": 281.44,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 953,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 0.57,
                "deg": 109,
                "gust": 0.8
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-27 06:00:00"
        },
        {
            "dt": 1682586000,
            "main": {
                "temp": 287.85,
                "feels_like": 286.81,
                "temp_min": 287.85,
                "temp_max": 287.85,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 953,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 1.05,
                "deg": 100,
                "gust": 1.45
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-04-27 09:00:00"
        }
    ],
    "city": {
        "id": 2996943,
        "name": "Arrondissement de Lyon",
        "coord": {
            "lat": 45.75,
            "lon": 4.5833
        },
        "country": "FR",
        "population": 1489152,
        "timezone": 7200,
        "sunrise": 1682138655,
        "sunset": 1682188552
    }
}