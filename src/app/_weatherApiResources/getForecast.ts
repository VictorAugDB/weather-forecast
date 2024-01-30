import { fetchWeatherAPI } from '../../utils/fetchWeatherAPI'
import { ForecastResProps } from '../../@types/forecast'

type GetWeatherForecastInput = {
  q: string
  days?: number // range 14
  lang?: 'pt'
  options?: RequestInit
}

export async function getForecast({
  q,
  days = 1,
  lang = 'pt',
  options,
}: GetWeatherForecastInput) {
  const res = await fetchWeatherAPI<ForecastResProps>({
    path: 'forecast.json',
    urlParamsObj: {
      q,
      days,
      lang,
    },
    options,
  })

  return res
}
