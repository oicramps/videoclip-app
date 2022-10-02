import { VideoWithGenre } from '../../../types'
import Card from '../Card'
import EmptyState from '../EmptyState'

type ListProps = {
  videos: VideoWithGenre[]
}

const List = ({ videos }: ListProps) => {
  return (
    <div className='w-full overflow-auto px-6 pb-24 lg:px-12 2xl:px-24'>
      {videos.length ? (
        <div className='grid auto-rows-auto grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3'>
          {videos.map((video) => (
            <Card key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}

export default List
