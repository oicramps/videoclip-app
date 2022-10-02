export type ApiResponse = {
  videos: Video[]
  genres: Genre[]
}

export type Video = {
  id: number
  artist: string
  title: string
  release_year: number
  genre_id: number
  image_url: string
}

export type VideoWithGenre = Video & {
  genre: Genre
}

export type Genre = {
  id: number
  name: string
}
