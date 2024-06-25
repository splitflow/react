export const NORTH_AMERICA = ['CAN', 'USA']

const TIME_RANGE = [
    'yr1980',
    'yr1982',
    'yr1984',
    'yr1986',
    'yr1988',
    'yr1990',
    'yr1992',
    'yr1994',
    'yr1996',
    'yr1998',
    'yr2000',
    'yr2002',
    'yr2004',
    'yr2006',
    'yr2008',
    'yr2010'
]

export async function loadPopulationByTimeDatasource(countries: string[]) {
    const result = await queryWorldbank(countries, ['SP.POP.TOTL'], TIME_RANGE)
    return buildDatasource(result, 'country', true)
}

export async function loadPopulationByAgeDatasource(countries: string[]) {
    const result = await queryWorldbank(
        countries,
        ['SP.POP.0014.TO.ZS', 'SP.POP.1564.TO.ZS', 'SP.POP.65UP.TO.ZS'],
        ['yr2022']
    )
    return buildDatasource(result, 'country')
}

export async function loadPopulationByCountryDatasource(countries: string[]) {
    const result = await queryWorldbank(countries, ['SP.POP.TOTL'], ['yr2022'])
    return buildDatasource(result, 'series')
}

async function queryWorldbank(countries: string[], series: string[], years: string[]) {
    const response = await fetch(
        `https://api.worldbank.org/v2/sources/16/country/${countries.join(';')}/series/${series.join(';')}/year/${years.join(';')}?format=json`
    )
    return await response.json()
}

function buildDatasource(result: any, by: 'country' | 'series', timeserie = false) {
    const serieIndex = by === 'country' ? 0 : 1
    const entryIndex = by === 'country' ? (timeserie ? 2 : 1) : 0

    const datasource = {}
    for (const data of result.source.data) {
        datasource[data.variable[serieIndex].value] ??= {}
        datasource[data.variable[serieIndex].value][data.variable[entryIndex].value] = data.value
    }
    return datasource
}
