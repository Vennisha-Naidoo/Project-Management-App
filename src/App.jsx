import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import Project from "./Components/Project";

function App() {

  // selectedProjectId - 'undefined' is nothing and 'null' is adding a new project
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(addProjectTask) {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: addProjectTask,
        projectId: prevState.selectedProjectId,
        id: taskId
      }

      return { 
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    });
  }

  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    });
  }

  function handleSelectedProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  function handleStartAddProject() {
    //updating project state, without losing the old/previous state -  at some point, the 'projects' will no longer be an empty array
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleCancelAddPorject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }

      return { 
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    });
  }

  const selectedProject =  projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={ handleAddProject } onCancel={ handleCancelAddPorject } />
  } else if (selectedProject) {
    content = <Project project={ selectedProject } onDelete={ handleDeleteProject } tasks={ projectsState.tasks } onAddTask={ handleAddTask } onDeleteTask={ handleDeleteTask } />;
  } else {
    content = <NoProjectSelected onStartAddProject={ handleStartAddProject } />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={ handleStartAddProject } 
        projects={ projectsState.projects } 
        onSelectProject={ handleSelectedProject }
      />
      { content }
    </main>
  );
}

export default App;
