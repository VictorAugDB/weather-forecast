import { ComponentProps } from 'react'
import { Search } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type SearchInputProps = ComponentProps<'input'>

export function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <div className="flex justify-between bg-white h-12 w-full max-w-search-input group focus-within:outline focus-within:rounded border border-orange-700">
      <input
        className={twMerge(
          'bg-transparent flex-1 text-xl px-2 outline-none pointer-events-auto',
          className,
        )}
        {...props}
      />
      <button className="hover:bg-gray-300 transition-colors h-full px-4">
        <Search />
      </button>
    </div>
  )
}
