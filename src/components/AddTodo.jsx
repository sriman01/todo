import React, { useState, useContext } from 'react'
import todoContext from '../context/todoContext';
import {v4} from 'uuid';


export default function AddTodo() {
    const [todoItem, setTodoItem] = useState('');
    const context = useContext(todoContext);
    const {todo, setTodo } = context;

    const todoAdder = () => {
        let id = v4();
        if(todoItem !== ''){
            setTodo([...todo, {id: id, value :todoItem, completed: false}]);
            setTodoItem('')
        }
        else{
            alert('Empty Todo ...!')
        }
    }

    return (
            <div className=''>
                <input
                    value = {todoItem}
                    onChange={(e) => setTodoItem(e.target.value)}
                    className=' bg-pink-800 px-2 py-2 sm:px-4 rounded-l-lg sm:text-xl outline-none text-slate-200'
                    placeholder='Write To Do...!'
                    type='text' />
                <button
                 onClick = {todoAdder}
                  className=' bg-orange-500 py-2 px-5 rounded-r-lg sm:text-xl font-bold'
                >
                    ADD
                </button>
            </div>
    )
}
