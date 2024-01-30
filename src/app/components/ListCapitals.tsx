'use client'

import { ComponentProps, ReactNode, useState } from 'react'
import { GetForecastFromCapitalsMinMaxTempMinMaxTempRes } from '../_weatherApiResources/getTodayForecastFromCapitalsMinMaxTemp'
import { CapitalMinMaxTable } from './CapitalMinMaxTable'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

type ListCapitalsProps = {
  capitals: GetForecastFromCapitalsMinMaxTempMinMaxTempRes[]
}

export function ListCapitals({ capitals }: ListCapitalsProps) {
  const [firstTableRows, setFirstTableRows] = useState(capitals.slice(0, 5))
  const [secondTableRows, setSecondTableRows] = useState(capitals.slice(5, 10))

  function handleListAll() {
    const half = Math.floor(capitals.length / 2)

    setFirstTableRows(capitals.slice(0, half))
    setSecondTableRows(capitals.slice(half, capitals.length))
  }

  function handleHide() {
    setFirstTableRows(capitals.slice(0, 5))
    setSecondTableRows(capitals.slice(5, 10))
  }

  return (
    <>
      <motion.div
        data-state={firstTableRows.length > 5 ? 'open' : 'close'}
        className="flex gap-10 flex-wrap data-[state='open']:animate-collapsibleSlideDown data-[state='close']:animate-collapsibleSlideUp"
        animate={{
          height: 'auto',
          opacity: 1,
        }}
        layout="preserve-aspect"
      >
        <CapitalMinMaxTable rows={firstTableRows} />
        <CapitalMinMaxTable rows={secondTableRows} />
      </motion.div>

      {firstTableRows.length > 5 ? (
        <Button onClick={handleHide}>Hide all capitals</Button>
      ) : (
        <Button onClick={handleListAll}>See all capitals</Button>
      )}
    </>
  )
}

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode
}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'bg-none border border-border-color bg-white hover:bg-gray-200 transition-colors rounded p-2 w-fit mx-auto',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
