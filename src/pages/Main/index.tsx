import { useEffect, useReducer, useState } from 'react'
import { VideoWithGenre } from '../../../types'
import Filter from '../../components/Filter'
import List from '../../components/List'
import useVideosQuery from '../../hooks/useVideosQuery'
import filterReducer, { FilterActionTypes, FilterState, FilterValue } from './reducer'

const initialState: FilterState = {
  search: '',
  genre: [],
  year: undefined,
}

const Main = () => {
  const [videos, setVideos] = useState<VideoWithGenre[]>([])
  const [filter, dispatch] = useReducer(filterReducer, initialState)

  console.log('filter', filter)

  const filterByAuthorOrTitle = (video: VideoWithGenre) =>
    !filter.search ||
    video.title.toLowerCase().includes(filter.search.toLowerCase()) ||
    video.artist.toLowerCase().includes(filter.search.toLowerCase())

  const filterByYear = (video: VideoWithGenre) => !filter.year || video.release_year === filter.year

  const filterByGenre = (video: VideoWithGenre) =>
    !filter.genre.length || filter.genre.map((genre) => genre.id).includes(video.genre?.id)

  const filterVideos = (video: VideoWithGenre) =>
    filterByGenre(video) && filterByAuthorOrTitle(video) && filterByYear(video)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const { data, error, isLoading } = useVideosQuery()

  useEffect(() => {
    if (!videos.length && data) {
      setVideos(data)
    }
  }, [data, videos.length])

  if (error) return <div>Request Failed</div>
  if (isLoading) return <div>Loading...</div>

  const handleChange = (type: FilterActionTypes, value: FilterValue) => {
    dispatch({ type, value })
  }

  return (
    <div className='mx-auto flex h-screen flex-col items-center gap-y-6 overflow-hidden bg-white dark:bg-gray-800'>
      <div className='flex w-full flex-col gap-y-6 px-24 py-12'>
        <div className='flex w-full flex-row items-center justify-between'>
          <h1 className='text-black dark:text-white'>Video clips</h1>
        </div>
        <Filter filter={filter} onChange={handleChange} />
      </div>

      <List videos={videos.filter(filterVideos)} />
    </div>
  )
}

export default Main
