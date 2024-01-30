import { GetForecastFromCapitalsMinMaxTempMinMaxTempRes } from '../_weatherApiResources/getTodayForecastFromCapitalsMinMaxTemp'
import { motion } from 'framer-motion'

type CapitalMinMaxTableProps = {
  rows: GetForecastFromCapitalsMinMaxTempMinMaxTempRes[]
}

export function CapitalMinMaxTable({ rows }: CapitalMinMaxTableProps) {
  return (
    <motion.table layout>
      <thead>
        <tr>
          <th scope="col" className="font-thin text-left px-2">
            Min
          </th>
          <th scope="col" className="font-thin text-left px-2">
            Máx
          </th>
          <th scope="col" className="px-2"></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name}>
            <td className="px-2 font-bold">{r.min}ºC</td>
            <td className="px-2 font-bold">{r.max}ºC</td>
            <td className="px-2 font-bold">{r.name}</td>
          </tr>
        ))}
      </tbody>
    </motion.table>
  )
}
