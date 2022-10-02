import React from 'react'
import useVideosQuery from '../../hooks/useVideosQuery'
import Card from '../Card'

type ListProps = {
  title?: string
}

const List = (props: ListProps) => {
  const { videos, error, isLoading } = useVideosQuery()

  if (error) return <div>Request Failed</div>
  if (isLoading) return <div>Loading...</div>

  console.log(videos)

  return (
    <div className='grid auto-rows-auto grid-cols-3 gap-6'>
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </div>
  )
}

export default List
