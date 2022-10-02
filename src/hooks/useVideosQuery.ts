import { useQuery } from 'react-query'
import type { ApiResponse, Video, VideoWithGenre } from './../../types/index.d'
import useApi from './useApi'

const sortByTitle = (a: Video, b: Video) => a.title.toString().localeCompare(b.title.toString())

const useVideosQuery = () => {
  const api = useApi()

  const getVideos = async () => {
    const { data } = await api.get<ApiResponse>('')

    return data.videos.sort(sortByTitle).map(
      (video: Video) =>
        ({
          ...video,
          genre: data.genres.find((genre) => genre.id === video.genre_id),
        } as VideoWithGenre),
    )
  }

  const { data, error, isLoading } = useQuery('videos', getVideos)

  return {
    videos: data ?? ([] as VideoWithGenre[]),
    error,
    isLoading,
  }
}

export default useVideosQuery