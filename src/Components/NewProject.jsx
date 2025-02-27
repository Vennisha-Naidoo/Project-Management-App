import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {

    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const projectTitle = title.current.value;
        const projectDescription = description.current.value;
        const projectDueDate = dueDate.current.value;

        if (projectTitle.trim() === '' ||  projectDescription === '' || projectDueDate === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: projectTitle,
            description: projectDescription,
            dueDate: projectDueDate
        });
    }

    return (
    <>
        <Modal ref={ modal } buttonCaption="Close"> 
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops!</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={ onCancel }>
                        Cancel
                    </button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={ handleSave }>
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={ title } label="Title" />
                <Input ref={ description } label="Description" textarea />
                <Input type="date" ref={ dueDate } label="Due Date" /> 
            </div>
        </div>
    </>
    )
}