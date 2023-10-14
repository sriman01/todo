import React, { useState, useContext } from 'react'
import todoContext from '../context/todoContext';
import { v4 } from 'uuid';


export default function AddTodo() {
    const [todoItem, setTodoItem] = useState('');
    const context = useContext(todoContext);
    const { todo, setTodo } = context;
    const [show, setShow] = useState(false);

    const todoAdder = () => {
        let id = Date.now();
        if (todoItem !== '') {
            setTodo([...todo, { id: id, value: todoItem, completed: false }]);
            setTodoItem('')
        }
        else {
            alert('Empty Todo ...!')
        }
        setShow(false);
    }

    const handleAdd = () => {
        setShow(!show);
    }

    return (
        <div className='mt-10   w-[22rem]'>
          {show ? 
            <div className=''>
                <input
                    value={todoItem}
                    onChange={(e) => setTodoItem(e.target.value)}
                    className='  bg-[#9999A3] px-2 py-2 sm:px-4 rounded-l-lg sm:text-xl outline-none text-white placeholder-white w-[70%] '
                    placeholder='Write To Do...!'
                    type='text' />
                 <button
                    onClick={todoAdder}
                    className=' bg-[#2F69FE] py-2 px-5 rounded-r-lg sm:text-xl font-bold w-[30%] '
                  >
                    ADD
                </button>
            </div>
            :
            <div>
            <button
                    onClick={handleAdd}
                    className=' w-[100%] bg-[#2F69FE] py-2 px-5 rounded-lg sm:text-xl font-bold'
                  >
                    ADD
                </button>
            </div> }

        </div>
    )
}
