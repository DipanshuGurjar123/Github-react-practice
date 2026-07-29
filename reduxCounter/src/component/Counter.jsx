import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from '../features/CounterSlice'

const Counter = () => {

    // count is the variable whose select for changing in state and use where, there value change by button //
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <div className='h-screen w-full bg-gray-950 text-white flex justify-center items-center'>


                <div className='h-[80%] w-[70%] flex justify-center items-center flex-col gap-8'>
                    <p className=' flex justify-center py-4 bg-gray-400 w-152 rounded-full'>
                        Current value : {count}
                    </p>


                    <div className='flex gap-2 justify-between'>
                        <button
                            onClick={() => { dispatch(increment()) }}
                            className='bg-green-700 py-2 px-6 rounded-full'
                        >Increment (+)</button>
                        <button
                            onClick={() => { dispatch(decrement()) }}
                            className='bg-purple-700 py-2 px-6 rounded-full'
                        >Decrement (-)</button>
                        <button
                            onClick={() => { dispatch(reset()) }}
                            className='bg-red-700 py-2 px-11 rounded-full'
                        >Reset (0)</button>
                        {/* 5 is action payload  */}
                        <button
                            onClick={() => { dispatch(incrementByAmount(5)) }}
                            className='bg-yellow-700 py-2 px-3 rounded-full'
                        >Increment by +5</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
