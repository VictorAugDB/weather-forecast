import { ComponentProps } from 'react'
import { Search } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type SearchInputProps = Omit<ComponentProps<'input'>, 'name'> & {
  handleSearch: (q: string) => void
}

export function SearchInput({
  className,
  handleSearch,
  ...props
}: SearchInputProps) {
  function handleSubmit(formData: FormData) {
    handleSearch(formData.get('search') as string)
  }

  return (
    <form
      action={handleSubmit}
      className="flex justify-between bg-white h-12 w-full max-w-search-input group focus-within:outline focus-within:rounded border border-border-color"
    >
      <input
        name="search"
        className={twMerge(
          'bg-transparent w-full text-xl px-2 outline-none',
          className,
        )}
        {...props}
      />
      <button className="hover:bg-gray-300 transition-colors h-full px-4">
        <Search className="text-gray-600" />
      </button>
    </form>
  )
}
