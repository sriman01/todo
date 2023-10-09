import { useContext, useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import TodoState from './context/todoState'



function App() {

  return (
    <TodoState >
    <div className=' bg-pink-300 min-h-screen w-full pb-2 '>
      <div className=' flex flex-col items-center pt-10'>
        <div className=' md:text-3xl md:font-bold text-pink-900 md:mb-10 text-xl font-bold mb-5'>To Do List...!</div>
        <AddTodo />
        <ListTodo />
      </div>
    </div>
    </TodoState>
  )
}

export default App
