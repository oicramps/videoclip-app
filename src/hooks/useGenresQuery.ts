import { useQuery } from 'react-query'
import type { ApiResponse, Genre } from './../../types/index.d'
import useApi from './useApi'

const sortByName = (a: Genre, b: Genre) => a.name.toString().localeCompare(b.name.toString())

const useGenresQuery = () => {
  const api = useApi()

  const getVideos = async () => {
    const { data } = await api.get<ApiResponse>('')

    return data.genres.sort(sortByName)
  }

  const { data, isError, isLoading } = useQuery('genres', getVideos, {
    onError: (error) => {
      console.error(error)
    },
  })

  return {
    data: data ?? [],
    isError,
    isLoading,
  }
}

export default useGenresQuery
