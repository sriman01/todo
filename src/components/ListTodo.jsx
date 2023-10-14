import React, { useContext, useState, useEffect } from 'react';
import todoContext from '../context/todoContext';


export default function TodoList() {
  const context = useContext(todoContext);
  const { todo, setTodo, completed } = context;
  const [editableItem, setEditableItem] = useState(null);
  const [editedValue, setEditedValue] = useState('');

  const todoRemover = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const handleEditClick = (id) => {
    setEditableItem(id);
    const currentItem = todo.find((item) => item.id === id);
    setEditedValue(currentItem ? currentItem.value : '');
  };

  const handleSaveClick = (id) => {
    const updatedTodo = todo.map((item) =>
      item.id === id && editedValue !== '' ? { ...item, value: editedValue } : item
    );
    setTodo(updatedTodo);
    setEditableItem(null);
  };

  const handleCheckboxChange = (id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  useEffect(() => {
    const localtodo = JSON.parse(localStorage.getItem('todos'));
    if(localtodo && localtodo.length > 0){
      setTodo(localtodo)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo))
  }, [todo])
  



  return (
    <>
      {todo.map((item) => (
        <div key={item.id} className='relative flex flex-shrink justify-between items-center py-4 md:gap-10 px-4 mt-4  w-[22rem] sm:[25rem] md:w-[40rem] rounded-md bg-slate-100'>
          <div className='flex gap-1 md:gap-3 justify-between items-center'>
            <input
              className='w-[1rem] md:w-[1.3rem] h-[1.3rem] cursor-pointer'
              checked={item.completed}
              onChange={() => handleCheckboxChange(item.id)}
              type='checkbox'
            />
            {editableItem === item.id ? (
              <input
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
                className={`text-md  w-[10rem] sm:[15rem] md:w-[20rem]  sm:text-lg lg:text-xl font-semibold bg-transparent outline-none`}
              />
            ) : (
              <div className={`text-md flex flex-wrap sm:text-lg lg:text-xl font-semibold bg-transparent w-[10rem] sm:[15rem] md:w-[20rem] outline-none ${item.completed ? 'line-through' : ''}`}>
                {item.value}
              </div>
            )}
          </div>
          <div className='flex gap-1 sm:gap-4 items-center absolute right-1'>
            {editableItem === item.id ? (
              <div onClick={() => handleSaveClick(item.id)} className='text-xl lg:text-3xl text-green-800 cursor-pointer'>
                <ion-icon name="save"></ion-icon>
              </div>
            ) : (
              <div onClick={() => handleEditClick(item.id)} className='text-xl lg:text-3xl text-indigo-600 cursor-pointer'>
                <ion-icon name="create"></ion-icon>
              </div>
            )}
            <button onClick={() => todoRemover(item.id)} className='text-sm lg:text-xl font-bold bg-red-600 px-2 md:px-4 md:py-1 rounded-lg'>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}