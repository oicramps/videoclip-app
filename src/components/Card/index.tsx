import { VideoWithGenre } from '../../../types'

type CardProps = {
  video: VideoWithGenre
}

const Card = ({ video }: CardProps) => {
  return (
    <div className='h-90 relative overflow-hidden rounded-2xl shadow-lg'>
      <img
        className='transform object-cover transition duration-500 hover:scale-110'
        src={video.image_url}
        alt={video.title}
      />
      <div className='text-shadow absolute top-3 right-3 font-normal text-white'>
        {video.release_year}
      </div>
      <div className='absolute bottom-3 left-3 right-3 flex flex-row items-center justify-between rounded-2xl p-4 backdrop-blur'>
        <div className='flex flex-col'>
          <p className='text-shadow font-semibold text-white '>{video.artist}</p>
          <p className='text-shadow font-light text-white '>{video.title}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
