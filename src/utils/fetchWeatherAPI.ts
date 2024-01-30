import { generateQueryString } from './generateQueryString'
import { getWeatherAPIUrl } from './getWeatherAPIUrl'

type FetchWeatherAPIProps = {
  path: string
  urlParamsObj?: Record<string, unknown>
  options?: RequestInit
}

export async function fetchWeatherAPI<T>({
  path,
  urlParamsObj,
  options,
}: FetchWeatherAPIProps): Promise<T> {
  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    }

    // Build request URL
    const queryString = urlParamsObj ? generateQueryString(urlParamsObj) : null
    const requestUrl = `${getWeatherAPIUrl(
      `/v1/${path}${queryString ? `?key=${process.env.WEATHER_API_KEY}&${queryString}` : ''}`,
    )}`

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw new Error(`Something went wrong..`)
  }
}
