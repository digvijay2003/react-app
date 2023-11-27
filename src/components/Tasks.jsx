import NewTasks from "./NewTasks";

export default function Tasks ({tasks, onadd, ondelete}) {

    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTasks onadd = {onadd} />
            {tasks.length === 0 && (<p className="text-stone-800 my-4">This Project doesn't have any tasks.</p>)}
            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((tasks) =>(
                        <li key={tasks.id} className="flex justify-between my-4">
                            <span>{tasks.text}</span>
                            <button onClick={() => ondelete(tasks.id)} className="test-stone-700 hover:text-red-500">Clear</button>
                        </li>
                    ))}
                </ul>
                )}
        </section>
    )
}