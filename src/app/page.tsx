import { getForecast } from './_weatherApiResources/getForecast'
import { getTodayForecastFromCapitalsMinMaxTempMinMaxTemp } from './_weatherApiResources/getTodayForecastFromCapitalsMinMaxTemp'
import { ListCapitals } from './components/ListCapitals'
import { SearchInput } from './components/SearchInput'

export default async function Home() {
  const capitalsMinMax =
    await getTodayForecastFromCapitalsMinMaxTempMinMaxTemp()

  return (
    <main className="flex-1 flex flex-col items-center justify-center divide-y-2 divide-white gap-16">
      <div className="flex flex-col gap-16 items-center">
        <h1 className="text-white">Previsão do tempo</h1>
        <SearchInput placeholder="Insira aqui o nome da cidade" />
      </div>
      <div className="pt-5 flex flex-col gap-5 pl-5 md:px-10">
        <h3 className="text-white">Capitais</h3>
        <ListCapitals capitals={capitalsMinMax} />
      </div>
    </main>
  )
}
