import { NextRequest, NextResponse } from 'next/server'
import { getCurrentWeekForecastData } from '../../_weatherApiResources/getCurrentWeekForecastData'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams

  const city = searchParams.get('city')

  const currentWeekWeatherForecast = await getCurrentWeekForecastData({
    cityName: city || 'Brasilia',
  })

  return NextResponse.json(currentWeekWeatherForecast)
}
