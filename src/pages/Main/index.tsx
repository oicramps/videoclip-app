import List from '../../components/List'

function Main() {
  return (
    <div className='mx-auto flex flex-col items-center gap-y-6 px-24 py-12'>
      <div className='flex w-full flex-row items-center justify-between py-6'>
        <h1>Video clips</h1>

        <div>filters</div>
      </div>
      <List />
    </div>
  )
}

export default Main
