import { getForecast } from './getForecast'
import { parse } from 'date-fns'

type GetCurrentWeekForecastDataInput = {
  cityName: string
  options?: RequestInit
}

type WeatherForecast = {
  date: Date
  avgtemp: number
  min: number
  max: number
  windkph: number
  fellslike: number
  avghumidity: number
  condition: {
    text: string
    icon: string
  }
}

export type GetCurrentWeekForecastData = {
  location: {
    name: string
    region: string
    country: string
  }
  data: WeatherForecast[]
}

export async function getCurrentWeekForecastData({
  cityName,
  options,
}: GetCurrentWeekForecastDataInput): Promise<GetCurrentWeekForecastData> {
  const res = await getForecast({
    q: cityName,
    days: 7,
    options: {
      next: {
        tags: [`${cityName}_7`],
        revalidate: 60 * 5, // 5min
      },
      ...options,
    },
  })

  return {
    location: {
      name: res.location.name,
      region: res.location.region,
      country: res.location.country,
    },
    data: res.forecast.forecastday.map((fd) => ({
      date: parse(fd.date, 'yyyy-MM-dd', new Date()),
      avgtemp: fd.day.avgtemp_c,
      min: fd.day.mintemp_c,
      max: fd.day.maxtemp_c,
      avghumidity: fd.day.avghumidity,
      fellslike: fd.hour[0].feelslike_c,
      windkph: fd.day.maxwind_kph,
      condition: {
        text: fd.day.condition.text,
        icon: `https:${fd.day.condition.icon}`,
      },
    })),
  }
}
