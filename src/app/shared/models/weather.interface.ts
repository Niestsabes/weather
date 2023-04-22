import { City } from "./city.interface"

export type Weather = {
    coord?: {
      lon: number,
      lat: number,
    },
    weather: [
      {
        id: number,
        main: string,
        description: string,
        icon: string
      }
    ],
    base?: string,
    main: {
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number,
      sea_level?: number,
      grnd_level?: number
      temp_kf?: number
    },
    visibility: number,
    wind: {
      speed: number,
      deg: number,
      gust: number
    },
    rain?: {
      [hour: string]: number
    },
    clouds: {
      all: number
    },
    pop?: number,
    dt: number,
    dt_txt?: string,
    sys: {
      type?: number,
      id?: number,
      country?: string,
      sunrise?: number,
      sunset?: number,
      pod?: string
    },
    timezone?: number,
    id?: number,
    name?: string,
    cod?: number
}

export type WeatherForecast = {
    cod: string,
    message: number,
    cnt: number,
    list: Array<Weather>
    city: City
}