import { fetchWeatherAPI } from '../../utils/fetchWeatherAPI'
import { ForecastResProps } from '../@types/forecast'

type GetWeatherForecastInput = {
  q: string
  days?: number // range 14
  options?: RequestInit
}

export async function getForecast({
  q,
  days = 1,
  options,
}: GetWeatherForecastInput) {
  const res = await fetchWeatherAPI<ForecastResProps>({
    path: 'forecast.json',
    urlParamsObj: {
      q,
      days,
    },
    options,
  })

  return res
}
