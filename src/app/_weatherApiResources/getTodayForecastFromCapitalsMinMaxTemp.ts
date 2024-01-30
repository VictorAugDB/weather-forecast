import { capitals } from '../../utils/capitals'
import { getForecast } from './getForecast'

type GetForecastFromCapitalsMinMaxTempMinMaxTempInput = {
  options?: RequestInit
}

export type GetForecastFromCapitalsMinMaxTempMinMaxTempRes = {
  name: string
  min: number
  max: number
}

export async function getTodayForecastFromCapitalsMinMaxTempMinMaxTemp({
  options,
}: GetForecastFromCapitalsMinMaxTempMinMaxTempInput = {}): Promise<
  GetForecastFromCapitalsMinMaxTempMinMaxTempRes[]
> {
  const res = await Promise.all(
    Object.keys(capitals).map((capitalName) =>
      getForecast({
        q: capitalName,
        options: {
          next: {
            tags: [`${capitalName}_1`],
            revalidate: 60 * 5, // 5min
          },
          ...options,
        },
      }),
    ),
  )

  const minMaxCapitals = res.map((r) => ({
    name: capitals[r.location.name.toLocaleLowerCase()],
    min: r.forecast.forecastday[0].day.mintemp_c,
    max: r.forecast.forecastday[0].day.maxtemp_c,
  }))

  return minMaxCapitals
}
