import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

type InputProps = {
  placeholder?: string
  onChange: (value: string) => void
}

const Input = ({ placeholder, onChange }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className='relative w-full'>
      <span className='absolute inset-y-0 left-4 flex items-center'>
        <MagnifyingGlassIcon className='w-8' color='white' />
      </span>
      <input
        className='w-full rounded-2xl bg-slate-400 py-5 px-7 pl-16 focus:outline-none dark:bg-gray-700 dark:text-white'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

export default Input
