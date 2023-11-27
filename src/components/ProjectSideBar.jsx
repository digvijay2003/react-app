export default function ProjectSideBar ({onStartAddProject, projects, onSelectProject, selectedProjectID}) {
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2  className="mb-8 font-bold uppercase md:text-xl text-stone-200">Projects</h2>
            <div>
                <button className="px-2 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
                onClick={onStartAddProject}>
                    + Add Projects
                </button>
            </div>
            <div>
                <ul className=" mt-8">
                    {projects.map((project) =>{
                        let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200";

                        if(project.id === selectedProjectID){
                            cssClasses+= " bg-stone-800 text-stone-200"
                        } else{
                            cssClasses+= " text-stone-400"
                        }

                        return(
                            <li key={project.id}>
                            <button 
                              onClick={() => onSelectProject(project.id )}
                              className={cssClasses}>
                              {project.title}
                            </button>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    );
}