import { VideoWithGenre } from '../../../types'
import Card from '../Card'

type ListProps = {
  videos: VideoWithGenre[]
}

const List = ({ videos }: ListProps) => {
  return (
    <div className='w-full overflow-auto px-24 pb-24'>
      <div className='grid auto-rows-auto grid-cols-3 gap-6'>
        {videos.map((video) => (
          <Card key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

export default List
