import { useState } from 'react';
import './app.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const removeHandler = (selectedTask) => {
     const updatedTasks = tasks.filter((item)=>item!=selectedTask);

     setTasks(updatedTasks);
  }

  const handleAddTask = (e) => {
    e.preventDefault();

    if(task.length){
      setTasks([
        ...tasks,
        task
      ]);
      setTask('');
    }
  }

  const handleTaskChange = (e) => {
    let val = e.target.value;
    if(val.length){
      
      setTask(val);
    }
  }

  return (
    <div className="App">
        <div className="list_item_adder">
          <form onSubmit={handleAddTask}>
            <h3>Add Task</h3>
            <input
              type="text"
              value={task}
              onChange={handleTaskChange}
              placeholder="Enter a new task..."
            />
            <button type="submit">Add Task</button>
          </form>
        </div>

        <div className="list_items">
          <h3>All Tasks</h3>

          <ul>
            {tasks.length?
              tasks.map((item,i)=>{
                return <li key={i}>{item} <button type="button" onClick={()=>removeHandler(item)}>Remove</button></li>
              })
            :
              <li>No tasks found</li>
            }
          </ul>
        </div>
    </div>
  );
}

export default App;
