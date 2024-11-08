import { useRef, useState } from "react"
import Modal from "./Modal";

export default function NewTask({ onAdd }) {

    const modal = useRef();

    const [newTask, setNewTest] = useState('');

    function handleChange(event) {
        setNewTest(event.target.value);
    }

    function handleClick() {
        if (newTask.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd(newTask);
        setNewTest('');
    }

    return <>
        <Modal ref={ modal } buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-700 my-4">Empty Task</h2>
            <p className="text-stone-600 mb-4">The Task field is empty. <br /> Please enter valid value before proceeding to click 'Add Task'</p>
        </Modal>
        <div className="flex items-center gap-4">
            <input 
                type="text" 
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={ handleChange }
                value={ newTask }
            />
            <button className="text-stone-700 hover:text-stone-950" onClick={ handleClick }>Add Task</button>
        </div>
    </>
}