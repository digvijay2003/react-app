import { useState } from 'react';

import './App.css';
import ProjectSideBar from './components/ProjectSideBar.jsx';
import NewProject from './components/NewProject.jsx';
import NPselected from './components/NotProjectSelected.jsx';
import SelectedProjet from './components/SelectedProject.jsx';


export default function App() {

  const [projectState, setprojectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask (text){
    setprojectState( previosState => {
      const taskID = Math.random();
      const newTask = {
        text: text,
        projectID: previosState.selectedProjectId,
        id : taskID
    };

    return{
      ...previosState,
      tasks: [newTask, ...previosState.tasks]
     };
    })
  }

  function handleDeleteTask (id){
    setprojectState( previosState => {
      return{
        ...previosState,
        tasks: previosState.tasks.filter((task) => 
          task.id !== id),
      };
    });
  }

  function handleSelectProject (id) {
    setprojectState( previosState => {
      return{
        ...previosState,
        selectedProjectId:id,
      };
    });
  }
  
  function handledeleteProject(){
    setprojectState( previosState => {
      return{
        ...previosState,
        selectedProjectId:undefined,
        projects: previosState.projects.filter((project) => 
          project.id !== previosState.selectedProjectId),
      };
    });
  }

  function handleStartAddProject(){
    setprojectState( previosState => {
      return{
        ...previosState,
        selectedProjectId:null,
      };
    });
  }

  function handleAddProject (projectData){
    setprojectState( previosState => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id : projectID
      };

      return{
        ...previosState,
        selectedProjectId:undefined,
        projects:[...previosState.projects, newProject]
      };
    })
  }

  const selectedproject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <SelectedProjet project={selectedproject} onDelete = {handledeleteProject} onaddTask = {handleAddTask} ondeleteTask = {handleDeleteTask} tasks = {projectState.tasks} />;

  console.log(projectState);

  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} />
  }
  else if(projectState.selectedProjectId === undefined){
    content = <NPselected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSideBar
       onStartAddProject={handleStartAddProject} 
       projects = {projectState.projects} 
       onSelectProject = {handleSelectProject} 
       selectedProjectID={projectState.selectedProjectId}
       />
      {content}
    </main>
  );
}