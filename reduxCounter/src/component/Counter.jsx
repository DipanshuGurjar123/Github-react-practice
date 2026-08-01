import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from '../features/CounterSlice'
import { toggleTheme } from '../features/themeSlice'

const Counter = () => {

    // count is the variable whose select for changing in state and use where, there value change by button //
    const count = useSelector((state) => state.counter.value)
    // add theme in counter //
    const theme = useSelector((state) => state.theme.mode)
    const dispatch = useDispatch()

    return (
        <>
            <div className={`h-screen w-full flex justify-center items-center
            transition-all duration-300 ease-in-out
            ${theme === "light"
            ? "bg-white text-black" 
            : "bg-gray-950 text-white"
            }`}
            >


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

                <button
                onClick={() => {dispatch(toggleTheme())}}
                className='absolute top-6 right-6 px-5 py-2 rounded-lg bg-blue-500 text-white
               transition-all duration-300 hover:scale-105'
                >
                    { theme === "light" ? "🌙 Dark" : "☀️ Light" }
                </button>
            </div>
        </>
    )
}

export default Counter
