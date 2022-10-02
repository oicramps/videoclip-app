import { useEffect, useReducer, useState } from 'react'
import { VideoWithGenre } from '../../../types'
import EmptyState from '../../components/EmptyState'
import Filter from '../../components/Filter'
import List from '../../components/List'
import Spinner from '../../components/Spinner'
import { EmptyStateTypes } from '../../constants/emptyState'
import useVideosQuery from '../../hooks/useVideosQuery'
import filterReducer, { FilterActionTypes, filterInitialState, FilterValue } from './reducer'
import logo from '../../assets/images/logo.png'

const Main = () => {
  const [videos, setVideos] = useState<VideoWithGenre[]>([])
  const [filter, dispatch] = useReducer(filterReducer, filterInitialState)

  const filterByAuthorOrTitle = (video: VideoWithGenre) =>
    !filter.search ||
    video.title.toLowerCase().includes(filter.search.toLowerCase()) ||
    video.artist.toLowerCase().includes(filter.search.toLowerCase())

  const filterByYear = (video: VideoWithGenre) => !filter.year || video.release_year === filter.year

  const filterByGenre = (video: VideoWithGenre) =>
    !filter.genre.length || filter.genre.map((genre) => genre.id).includes(video.genre?.id)

  const filterVideos = (video: VideoWithGenre) =>
    filterByGenre(video) && filterByAuthorOrTitle(video) && filterByYear(video)

  const { data, isError, isLoading } = useVideosQuery()

  useEffect(() => {
    if (!videos.length && data) {
      setVideos(data)
    }
  }, [data, videos.length])

  const handleChange = (type: FilterActionTypes, value: FilterValue) => {
    dispatch({ type, value })
  }

  return (
    <div className='mx-auto flex h-screen flex-col items-center overflow-hidden bg-gray-800'>
      <div className='flex w-full flex-col gap-y-6 py-12 px-6 lg:px-12 2xl:px-24'>
        <div className='flex w-full flex-row items-center gap-x-4'>
          <img
            src={logo}
            alt='logo'
            title='XITE'
            className='w-24 cursor-pointer'
            onClick={() => window.open('https://www.xite.nl/')}
          />
          <h1 className='text-white'>Video clips</h1>
        </div>
        <Filter filter={filter} onChange={handleChange} />
      </div>
      {isError ? (
        <EmptyState type={EmptyStateTypes.ERROR} />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <List videos={videos.filter(filterVideos)} />
      )}
    </div>
  )
}

export default Main
