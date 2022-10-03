import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

type InputProps = {
  value: string
  placeholder?: string
  onChange: (value: string) => void
}

const Input = ({ value, placeholder, onChange }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className='relative w-full'>
      <span className='absolute inset-y-0 left-4 flex items-center'>
        <MagnifyingGlassIcon className='w-8' color='white' />
      </span>
      <input
        type='text'
        className='w-full rounded-2xl bg-gray-700 py-5 px-7 pl-16 text-white focus:shadow-border focus:shadow-orange-400 focus:outline-none'
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}

export default Input
