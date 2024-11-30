'use client'
import React,{useState} from 'react'

const page = () => {
  const allTask = [JSON.parse(localStorage.getItem('task'))];
  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const [task,setTask] = useState([]);
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    setTask([...task,{title,desc}]);
    localStorage.setItem('task',JSON.stringify(task));
    setTitle('');
    setDesc('');
    task && console.log(task)
  }
 
  let renderTask = <h2 className='m-4'>No Task Available!</h2>

  if(task.length > 0){
    renderTask = task.map((t,i)=>{
      return <li key={i}>
        <div className='flex justify-around mb-5'>
          <span>{i+1}</span>
          <h5 className='text-xl font-semibold'>{t.title}</h5>
          <h6 className='text-xl font-semibold'>{t.desc}</h6>
          <button className='bg-red-500 text-white rounded px-3 py-1' onClick={()=>removeTask(i)}>Delete</button>
        </div>
      </li>
    })
  }

  const removeTask = (id)=>{
  //  const copyTask = task.filter((t,i)=>{
  //   if(i !== id){
  //     return t;
  //   }
  //  })
   let copyTask = [...task]; 
   copyTask.splice(id,1);
   setTask(copyTask)
   localStorage.setItem('task',JSON.stringify(task));
  }

  return (
   <>
   <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My Todo List</h1>
   <form onSubmit={handleSubmit}>
    <input 
    type='text' 
    className='text-2xl text-black bg-zinc-200 border-zinc-800 border-4 m-8 px-4 py-2' 
    placeholder='Enter New Title...' 
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    />
    <input 
    type='text' 
    className='text-2xl text-black bg-zinc-200 border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter New Description...' 
    value={desc}
    onChange={(e)=>setDesc(e.target.value)}
    />
    <button className='text-white bg-zinc-500 rounded px-4 py-3 text-2xl font-bold m-5'>Add Task</button>
   </form>
   <hr/>
   <div>
    <ul>
      {
        renderTask
      }
    </ul>
   </div>
   </>
  )
}

export default page