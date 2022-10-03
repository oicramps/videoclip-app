import Select, {
  ActionMeta,
  ControlProps,
  CSSObjectWithLabel,
  MultiValue,
  OptionProps,
} from 'react-select'
import colors from 'tailwindcss/colors'
import theme from 'tailwindcss/defaultTheme'
import { Genre } from '../../../types'
import useGenresQuery from '../../hooks/useGenresQuery'
import { FilterActionTypes, FilterState, FilterValue } from '../../pages/Main/reducer'
import { generateYearsOptions } from '../../utils/date'
import Input from '../Input'

const selectStyles = {
  placeholder: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: colors.gray[400],
  }),
  control: (provided: CSSObjectWithLabel, state: ControlProps) => ({
    ...provided,
    backgroundColor: colors.gray[700],
    border: 'none',
    borderRadius: theme.borderRadius['2xl'],
    boxShadow: state.isFocused ? `0 0 0 1px ${colors.orange[400]}` : 'none',
    padding: `${theme.spacing[3]}`,
  }),
  input: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: colors.white,
  }),
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    backgroundColor: colors.gray[700],
    color: colors.white,
  }),
  option: (provided: CSSObjectWithLabel, state: OptionProps) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: state.isSelected || state.isFocused ? colors.orange[500] : colors.gray[700],
  }),
  singleValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: colors.white,
  }),
  multiValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    backgroundColor: colors.gray[500],
    color: colors.white,
    borderRadius: theme.borderRadius['lg'],
  }),
  multiValueLabel: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: colors.white,
  }),
}

type SelectOption = {
  value: number
  label: string
}

type GenreSelectOption = SelectOption & {
  genre: Genre
}

type FilterProps = {
  filter: FilterState
  onChange: (type: FilterActionTypes, value: FilterValue) => void
}

const Filter = ({ filter, onChange }: FilterProps) => {
  const { data: genres } = useGenresQuery()

  const handleSearch = (value: string) => {
    onChange(FilterActionTypes.UPDATE_SEARCH, value)
  }

  const handleSelectGenre = (newValue: MultiValue<unknown>) => {
    const genres = newValue as GenreSelectOption[]
    onChange(
      FilterActionTypes.UPDATE_GENRE,
      genres.map(({ genre }) => genre),
    )
  }

  const handleChangeYear = (newValue: unknown, action: ActionMeta<unknown>) => {
    console.log(action, 'ACTION')
    onChange(FilterActionTypes.UPDATE_YEAR, (newValue as SelectOption).value)
  }

  return (
    <>
      <Input
        placeholder='Search by artist or title'
        value={filter.search}
        onChange={handleSearch}
      />
      <div className='flex w-full flex-col items-center justify-between gap-6 md:flex-row'>
        <Select
          className='w-full flex-1'
          placeholder='Filter by genre'
          options={genres.map(
            (genre) => ({ value: genre.id, label: genre.name, genre } as GenreSelectOption),
          )}
          styles={selectStyles}
          onChange={handleSelectGenre}
          isMulti
        />
        <Select
          className='w-full md:w-2/5 lg:w-1/3'
          placeholder='Filter by year'
          options={generateYearsOptions().map((year) => ({ value: year, label: year }))}
          styles={selectStyles}
          onChange={handleChangeYear}
          isClearable
        />
      </div>
    </>
  )
}

export default Filter
