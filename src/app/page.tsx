import { getForecast } from './_weatherApiResources/getForecast'
import { getTodayForecastFromCapitalsMinMaxTempMinMaxTemp } from './_weatherApiResources/getTodayForecastFromCapitalsMinMaxTemp'
import { CapitalMinMaxTable } from './components/CapitalMinMaxTable'
import { SearchInput } from './components/SearchInput'

export default async function Home() {
  const res = await getTodayForecastFromCapitalsMinMaxTempMinMaxTemp()

  return (
    <main className="flex-1 flex flex-col items-center justify-center divide-y-2 divide-white gap-16">
      <div className="flex flex-col gap-16 items-center">
        <h1 className="text-white">Previsão do tempo</h1>
        <SearchInput placeholder="Insira aqui o nome da cidade" />
      </div>
      <div className="pt-5">
        <h3 className="text-white">Capitais</h3>
        <CapitalMinMaxTable />
      </div>
    </main>
  )
}
