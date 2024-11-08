import { useState } from "react"

export default function NewTask({ onAdd }) {

    const [newTask, setNewTest] = useState('');

    function handleChange(event) {
        setNewTest(event.target.value);
    }

    function handleClick() {
        onAdd(newTask);
        setNewTest('');
    }

    return <div className="flex items-center gap-4">
        <input 
            type="text" 
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={ handleChange }
            value={ newTask }
        />
        <button className="text-stone-700 hover:text-stone-950" onClick={ handleClick }>Add Task</button>
    </div>
}