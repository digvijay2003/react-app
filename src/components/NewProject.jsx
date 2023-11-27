import Input from "./input.jsx";
import { useRef } from "react"

export default function NewProject({onAdd}) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave () {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const entereddueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || entereddueDate.trim() === ''){
            
        }

        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:entereddueDate
        })
    }

    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button onClick={handleSave} className="px-6 py-2 rounder-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
            </menu>
            <div>
                <Input type = "text" ref = {title} label = "Title"/>
                <Input ref = {description} label = "Description" textarea={true}/>
                <Input type = "date" ref = {dueDate} label = "Due Date"/>
            </div>
        </div>
    )
}