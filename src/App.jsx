import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";

function App() {

  // selectedProjectId - 'undefined' is nothing and 'null' is adding a new project
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    //updating project state, without losing the old/previous state -  at some point, the 'projects' will no longer be an empty array
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject />
  } else {
    content = <NoProjectSelected onStartAddProject={ handleStartAddProject } />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={ handleStartAddProject } />
      { content }
    </main>
  );
}

export default App;
