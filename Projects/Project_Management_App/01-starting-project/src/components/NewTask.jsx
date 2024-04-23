import { useContext, useState } from "react";
import { ProjectContext } from "../store/project-context";

export default function NewTask(){
    const {addTask} = useContext(ProjectContext);
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event){
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        addTask(enteredTask)
        console.log(enteredTask);
        setEnteredTask('')
    }
    return(
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
            onChange={handleChange}
            value={enteredTask}
            />
            <button className="text-stone-700 hover:text-slate-950" onClick={handleClick}>Add Task</button>
        </div>
    )
}