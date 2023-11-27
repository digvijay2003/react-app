import { useState } from "react";

export default function NewTasks ({onadd}) {

    const [enteredTask, setenteredTask] = useState('');
    
    function handleChange(event){
        setenteredTask(event.target.value);
    }

    function handleNewTasks (){
        if(enteredTask.trim() === ''){
            return;
        }
        onadd(enteredTask);
        setenteredTask('');
    }

    return(
        <div className="flex items-center gap-4">
            <input 
             onChange = {handleChange}
             type="text" 
             className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
             value={enteredTask} />
            <button
             onClick={handleNewTasks} 
             className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
}