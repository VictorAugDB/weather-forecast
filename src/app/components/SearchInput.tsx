import { ComponentProps } from 'react'
import { Search } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type SearchInputProps = ComponentProps<'input'>

export function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <div className="flex justify-between bg-white h-12 w-full max-w-search-input group focus-within:outline focus-within:rounded border border-border-color">
      <input
        className={twMerge(
          'bg-transparent w-full text-xl px-2 outline-none',
          className,
        )}
        {...props}
      />
      <button className="hover:bg-gray-300 transition-colors h-full px-4">
        <Search className="text-gray-600" />
      </button>
    </div>
  )
}
