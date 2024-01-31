'use client'

import { ArrowDown, ArrowUp, X } from 'lucide-react'
import { GetCurrentWeekForecastData } from '../_weatherApiResources/getCurrentWeekForecastData'
import { SearchInput } from './SearchInput'
import { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { generateAcronym } from '../../utils/generateAcronym'
import Image from 'next/image'
import { normalizeRemoveDiacritics } from '../../utils/normalizeRemoveDiacritics'
import { getWeekDay } from '../../utils/Intl'
import { AnimatePresence, motion } from 'framer-motion'

export function CurrentWeekWeatherForecast() {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const [location, setLocation] = useState<
    GetCurrentWeekForecastData['location'] | null
  >(null)
  const [currentWeekWeatherForecast, setCurrentWeekWeatherForecast] = useState<
    GetCurrentWeekForecastData['data']
  >([])
  const [currentWeatherForecastIdx, setCurrentWeatherForecastIdx] = useState<
    number | null
  >(null)
  const currentWeatherForecast =
    currentWeatherForecastIdx !== null
      ? currentWeekWeatherForecast[currentWeatherForecastIdx]
      : null

  const [isLoading, setIsLoading] = useState(false)

  async function handleSearch(city: string) {
    try {
      setIsLoading(true)
      const res = await fetch(
        `/api/week-forecast?city=${normalizeRemoveDiacritics(city).toLocaleLowerCase()}`,
      )

      const { location, data }: GetCurrentWeekForecastData = await res.json()

      setLocation(location)
      setCurrentWeekWeatherForecast(
        data.map((d) => ({
          ...d,
          date: new Date(d.date),
        })),
      )
      setCurrentWeatherForecastIdx(0)
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.error(err)
      }

      toast('Ocorreu um erro tente novamente mais tarde!', {
        style: { backgroundColor: '#ef4444', color: 'white' },
      })
    }

    setIsLoading(false)
  }

  function handleChangeDate(idx: number) {
    setCurrentWeatherForecastIdx(idx)
    if (titleRef.current) {
      titleRef.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  function handleClearData() {
    setLocation(null)
    setCurrentWeekWeatherForecast([])
    setCurrentWeatherForecastIdx(null)
  }

  return (
    <>
      <AnimatePresence>
        {currentWeatherForecast && location ? (
          <motion.div
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
              },
            }}
            initial={{
              x: '-100%',
              opacity: 0,
            }}
            exit={{
              x: '-100%',
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
              },
            }}
            className="px-2 p-4 md:px-4 space-y-4 bg-stone-200 divide-y-2 divide-orange-400 text-stone-600 relative"
          >
            <motion.section
              key={currentWeatherForecast.date.toISOString()}
              className="px-2 md:px-8 flex flex-col gap-6 items-center"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
              }}
            >
              <button
                onClick={handleClearData}
                className="rounded-full hover:bg-stone-300 text-orange-400 p-2 absolute right-2 md:right-4 top-2 md:top-4"
              >
                <X />
              </button>

              <h4 ref={titleRef}>
                {location.name}, {generateAcronym(location.region)} -{' '}
                {location.country}
              </h4>
              <h2>{currentWeatherForecast.avgtemp}ºC</h2>
              <div className="flex gap-2 items-center">
                <Image
                  width={32}
                  height={32}
                  alt="Condition Icon"
                  src={currentWeatherForecast.condition.icon}
                />
                <h4>{currentWeatherForecast.condition.text}</h4>
              </div>
              <div className="flex gap-8">
                <div className="flex gap-2">
                  <div className="flex gap-1">
                    <ArrowDown className="text-orange-400 w-4 h-4" />
                    <p className="font-bold text-sm">
                      {currentWeatherForecast.min}ºC
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <ArrowUp className="text-orange-400 w-4 h-4" />
                    <p className="font-bold text-sm">
                      {currentWeatherForecast.max}ºC
                    </p>
                  </div>
                </div>
                <p className="font-thin">
                  Sensação{' '}
                  <span className="font-bold">
                    {currentWeatherForecast.fellslike}ºC
                  </span>
                </p>
              </div>
              <div className="flex gap-8">
                <p className="font-thin">
                  Vento{' '}
                  <span className="font-bold">
                    {currentWeatherForecast.windkph}km/h
                  </span>
                </p>
                <p className="font-thin">
                  Umidade{' '}
                  <span className="font-bold">
                    {currentWeatherForecast.avghumidity}%
                  </span>
                </p>
              </div>
            </motion.section>
            <section className="pt-4 flex items-center gap-6 px-2 md:px-8 flex-wrap justify-center">
              {currentWeekWeatherForecast.map((wf, idx) => (
                <button
                  onClick={() => handleChangeDate(idx)}
                  data-is-current={idx === currentWeatherForecastIdx}
                  key={wf.date.toString()}
                  className="flex gap-1 flex-col items-center data-[is-current=true]:bg-stone-300 p-2 rounded hover:bg-stone-300 transition-colors"
                >
                  <h4>{getWeekDay(wf.date)}</h4>
                  <div className="flex gap-1 items-center">
                    <ArrowDown className="text-orange-400 w-4 h-4" />
                    <p className="font-medium text-orange-400 text-sm">
                      {wf.min}ºC
                    </p>
                    <ArrowUp className="text-orange-400 w-4 h-4" />
                    <p className="font-medium text-orange-400 text-sm">
                      {wf.max}ºC
                    </p>
                  </div>
                </button>
              ))}
            </section>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="px-2 w-full flex justify-center">
        <SearchInput
          disableSearch={isLoading}
          handleSearch={handleSearch}
          placeholder="Insira aqui o nome da cidade"
        />
      </div>
      {isLoading ? (
        <p className="animate-ellipsis-dot text-base font-medium ">Buscando</p>
      ) : null}
    </>
  )
}
