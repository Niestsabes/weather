export type OpenCageResponse = {
    documentation?: string,
    licenses?: OpenCageResponseLicense[],
    rate?: OpenCageResponseRate,
    results: OpenCageResponseResult[],
    status: OpenCageResponseStatus,
    stay_informed?: {
        blog?: string,
        twitter?: string,
        mastodon?: string,
    },
    thanks?: string,
    timestamp?: OpenCageResponseTimestamp,
    total_results?: number
}

export type OpenCageResponseLicense = {
    name: string,
    url: string
}

export type OpenCageResponseRate = {
    limit: number,
    remaining: number,
    reset: number
}

export type OpenCageResponseStatus = {
    code: number,
    message: string
}

export type OpenCageResponseTimestamp = {
    created_http: string,
    created_unix: number
}

export type OpenCageResponseResult = {
    annotations?: {
        DMS?: {
            lat: string,
            lng: string
        },
        FIPS?: {
            county: string,
            state: string
        },
        MGRS?: string,
        Maidenhead?: string,
        Mercator?: {
            x: number,
            y: number
        },
        NUTS?: {   
            [nuts: string]: {
                code: string
            }
        },
        OSM?: {
            edit_url: string,
            note_url: string,
            url: string
        },
        UN_M49?: {
            regions: {
                [region: string]: string
            },
            statistical_groupings: string[]
        },
        callingcode?: number,
        currency?: {
            alternate_symbols: string[],
            decimal_mark: string,
            disambiguate_symbol?: string,
            html_entity: string,
            iso_code: string,
            iso_numeric: string,
            name: string,
            smallest_denomination: number,
            subunit: string,
            subunit_to_unit: number,
            symbol: string,
            symbol_first: number,
            thousands_separator: string
        },
        flag?: string,
        geohash?: string,
        qibla?: number,
        roadinfo?: {
            drive_on?: string,
            road?: string,
            speed_in?: string
        },
        sun?: {
            rise: {
                apparent: number,
                astronomical: number,
                civil: number,
                nautical: number
            },
            set: {
                apparent: number,
                astronomical: number,
                civil: number,
                nautical: number
            }
        },
        timezone?: {
            name?: string,
            now_in_dst?: number,
            offset_sec?: number,
            offset_string?: string,
            short_name?: string
        },
        what3words?: {
            words?: string
        },
        wikidata?: string
    }
    bounds?: {
        northeast: {
            lat: number,
            lng: number
        },
        southwest: {
            lat: number,
            lng: number
        }
    },
    components: {
        _category?: string,
        _type?: string,
        city?: string,
        city_district?: string,
        continent?: string,
        country?: string,
        country_code?: string,
        county?: string,
        postcode?: string,
        road?: string,
        road_type?: string,
        state?: string,
        state_code?: string,
        suburb?: string,
        town?: string,
        village?: string,
        [key: string]: string
    },
    confidence?: number,
    formatted: string,
    geometry: {
        lat: number,
        lng: number
    }
}