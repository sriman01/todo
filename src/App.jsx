import React, { useContext, useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import TodoState from './context/todoState'



function App() {

  return (
    <TodoState >
    <div className=' bg-cyan-200 min-h-screen w-full pb-2 font-[poppins]'>
      <div className=' flex flex-col items-center pt-10'>
        <div 
          className={`flex items-center justify-center bg-[url("https://intellsys-optimizer.b-cdn.net/interviews/978ea909-91ec-49c2-bd69-d494c097d38d/header.jpg")] md:text-3xl md:font-bold text- md:mb-10 text-xl font-bold mb-5 w-[22rem] sm:[25rem] md:w-[40rem] h-[15rem] rounded-lg`}>
             <div className='text-5xl'>
               TODO
             </div>
          </div>
        <div></div>
        <ListTodo />
        <AddTodo />
      </div>
    </div>
    </TodoState>
  )
}

export default App
