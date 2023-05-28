export type City = {
    id?: string,
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
