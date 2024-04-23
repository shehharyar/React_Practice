import React, { useContext } from 'react';
import { ProjectContext } from '../store/project-context';
import NewProject from './NewProject';
import NoProjectSelected from './NoProjectSelected';
import ProjectsSidebar from './PorjectsSidebar';
import SelectedProject from './SelectedProject';

function MainApp() {
    const projectCtx = useContext(ProjectContext);
    const selectedProject = projectCtx.projects.find(project => project.id === projectCtx.selectedProjectId);
    let content= <SelectedProject project={selectedProject} 
    
    />;
  
    if (projectCtx.selectedProjectId === null) {
      content = <NewProject/>;
    } else if (projectCtx.selectedProjectId === undefined) {
      content = <NoProjectSelected />;
    }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar/>
      {content}
    </main>
  )
}

export default MainApp