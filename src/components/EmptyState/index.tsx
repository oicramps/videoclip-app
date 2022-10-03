import { EmptyStateTypes } from '../../constants/emptyState'
import ErrorIcon from '../ErrorIcon'
import NoResultIcon from '../NoResultIcon'

type EmptyStateProps = {
  type?: EmptyStateTypes
}

const EmptyState = ({ type = EmptyStateTypes.NO_RESULTS }: EmptyStateProps) => {
  const emptyData =
    type === EmptyStateTypes.NO_RESULTS
      ? {
          title: 'No results found!',
          description: 'Please, Try searching for something else.',
          icon: <NoResultIcon />,
        }
      : {
          title: 'Ops! Something went wrong!',
          description: 'Please, try again later.',
          icon: <ErrorIcon />,
        }

  return (
    <div className='flex w-full flex-col items-center justify-center gap-4'>
      <h1 className='text-white'>{emptyData.title}</h1>
      {emptyData.icon}
      <p className='text-white'>{emptyData.description}.</p>
    </div>
  )
}

export default EmptyState
