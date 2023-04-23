export type City = {
    id?: number,
    name: string,
    coord?: {
        lat: number,
        lon: number
    },
    country: string,
    population?: number,
    timezone?: number,
    sunrise?: number,
    sunset?: number
}

export type RecordCity<T> = { [cityName: string]: T }