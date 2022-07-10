import { useEffect } from 'react'
import { increment, decrement, incrementByAmount, getUserInfo, setUserInfo } from './slice'
import { useAppSelector, useAppDispatch } from './store'

const App = () => {
  const { count } = useAppSelector(store => store.counter)
  const { user, loading } = useAppSelector(store => store.user)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserInfo(12))
  }, [])

  const handleClick = () => {
    dispatch(setUserInfo({
      phone: '12345678909',
      name: 'Jack',
      address: 'China'
    }))
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='bg-emerald p-3 border-cyan border 
        rounded-1 flex flex-col justify-center'>
        <div className='w-[200px] mb-2'>
          <h3 className='text-black font-500 text-md h-[30px] leading-[30px]'>同步测试：</h3>
          <div className='mt-2'>Count: {count}</div>
          <div className='flex justify-between mt-1'>
            <button className='px-2 bg-transparent border-dark rounded-1 outline-none
            border-solid border-2' onClick={() => { dispatch(increment()) }}>+1</button>
            <button className='px-2 bg-transparent border-dark rounded-1 outline-none
            border-solid border-2' onClick={() => { dispatch(incrementByAmount(5)) }}>+5</button>
            <button className='px-2 bg-transparent border-dark rounded-1 outline-none
            border-solid border-2' onClick={() => { dispatch(decrement()) }}>-1</button>
          </div>
        </div>

        <div className='mt-2'>
          {
            loading ? <div>loading</div> :
              <>
                <h3 className='text-black font-500 text-md h-[30px] leading-[30px]'>GET 请求：</h3>
                <div>{user?.address}</div>
                <div>{user?.name}</div>
                <div>{user?.phone}</div>
              </>
          }
        </div>

        <div className='mt-2'>
          {
            loading ? <div>loading</div> :
              <>
                <h3 className='text-black font-500 text-md h-[30px] leading-[30px]'>POST 请求：</h3>
                <button onClick={handleClick} className='bg-transparent px-2 py-1'>Click me to send a post request</button>
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default App
