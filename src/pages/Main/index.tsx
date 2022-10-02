import { useEffect, useState } from 'react'
import { VideoWithGenre } from '../../../types'
import Input from '../../components/Input'
import List from '../../components/List'
import useVideosQuery from '../../hooks/useVideosQuery'

function Main() {
  const [videos, setVideos] = useState<VideoWithGenre[]>([])
  const [searchString, setSearchString] = useState<string>('')
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

  const handleSearch = (value: string) => {
    setSearchString(value)
  }

  const filterByAuthorOrTitle = (video: VideoWithGenre) =>
    !searchString ||
    video.title.toLowerCase().includes(searchString.toLowerCase()) ||
    video.artist.toLowerCase().includes(searchString.toLowerCase())

  return (
    <div className='mx-auto flex h-screen flex-col items-center gap-y-6 overflow-hidden bg-white dark:bg-gray-800'>
      <div className='flex w-full flex-col gap-y-6 px-24 py-12'>
        <div className='flex w-full flex-row items-center justify-between'>
          <h1 className='text-black dark:text-white'>Video clips</h1>
        </div>
        <Input placeholder='Search by artist or title' onChange={handleSearch} />
        <div className='flex w-full flex-row items-center justify-between'>
          <div>Genre filter</div>
          <div>Year filter</div>
        </div>
      </div>

      <List videos={videos.filter(filterByAuthorOrTitle)} />
    </div>
  )
}

export default Main
