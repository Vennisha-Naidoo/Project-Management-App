import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";

function App() {

  // selectedProjectId - 'undefined' is nothing and 'null' is adding a new project
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

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

      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return { 
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={ handleAddProject } onCancel={ handleCancelAddPorject } />
  } else {
    content = <NoProjectSelected onStartAddProject={ handleStartAddProject } />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={ handleStartAddProject } projects={ projectsState.projects } />
      { content }
    </main>
  );
}

export default App;
