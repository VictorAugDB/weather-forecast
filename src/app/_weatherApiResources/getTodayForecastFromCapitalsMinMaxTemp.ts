import { capitals } from '../../utils/capitals'
import { getForecast } from './getForecast'

type GetForecastFromCapitalsMinMaxTempMinMaxTempInput = {
  options?: RequestInit
}

type GetForecastFromCapitalsMinMaxTempMinMaxTempRes = {
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
    capitals.map((c) =>
      getForecast({
        q: c,
        options: {
          next: {
            revalidate: 60 * 5, // 5min
          },
          ...options,
        },
      }),
    ),
  )

  const minMaxCapitals = res.map((r) => ({
    name: r.location.name,
    min: r.forecast.forecastday[0].day.mintemp_c,
    max: r.forecast.forecastday[0].day.maxtemp_c,
  }))

  return minMaxCapitals
}
