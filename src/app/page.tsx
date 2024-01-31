import { getTodayForecastFromCapitalsMinMaxTempMinMaxTemp } from './_weatherApiResources/getTodayForecastFromCapitalsMinMaxTemp'
import { ListCapitals } from './components/ListCapitals'
import { CurrentWeekWeatherForecast } from './components/CurrentWeekWeatherForecast'

export default async function Home() {
  const capitalsMinMax =
    await getTodayForecastFromCapitalsMinMaxTempMinMaxTemp()

  return (
    <main className="flex-1 flex flex-col items-center justify-center divide-y-2 divide-white gap-16 lg:p-layout">
      <div className="flex flex-col gap-16 items-center">
        <h1 className="pl-8 pt-8 text-white">Previsão do tempo</h1>
        <div className="flex flex-col gap-4 items-center w-full">
          <CurrentWeekWeatherForecast />
        </div>
      </div>
      <div className="pt-5 flex flex-col gap-5 pl-5 md:px-10">
        <h3 className="text-white">Capitais</h3>
        <ListCapitals capitals={capitalsMinMax} />
      </div>
    </main>
  )
}
