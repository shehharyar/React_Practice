import { createContext, useReducer } from "react";



export const ProjectContext = createContext({
    selectedProjectId: undefined,
    projects: [],
    tasks:[],
    selectProject : () =>{},
    startAddProject : () =>{},
    addProject : () =>{},
    deleteProject : () =>{},
    cancelAddProject: () =>{},
    addTask : () =>{},
    deleteTask : () =>{},
});

function ProjectReducer(state,action){
    switch(action.type){
        case "START_ADD_PROJECT":
            return {
                ...state,
                selectedProjectId: null,
              };
        case "SELECT_PROJECT":
            return {
                ...state,
                selectedProjectId: action.payload,
              };
        case "ADD_PROJECT":
            const projectId = Math.random();
            const newProject = {
              ...action.payload,
              id: projectId,
            };
            return {
              ...state,
              selectedProjectId: undefined,
              projects: [...state.projects, newProject],
            };
        case "DELETE_PROJECT":
            return {
                ...state,
                selectedProjectId: undefined,
                projects: state.projects.filter(project => project.id !== state.selectedProjectId)
              };
        case "CANCEL_ADD_PROJECT":
            return {
                ...state,
                selectedProjectId: undefined,
              };

        case "ADD_TASK":
            const taskId = Math.random();
            const newTask = {
                text: action.payload,
                 projectId : state.selectedProjectId,
                 id: taskId,
                 };
            return {
                 ...state,
                 tasks: [newTask, ...state.tasks],
                };
        case "DELETE_TASK":
            return{
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
              }
        default:
            return state;
    }
}

function ProjectContextProvider ({children}) {
 const [projectsState, projectDispatch] =   useReducer(ProjectReducer, {
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });
 function handleAddTask(text){
    projectDispatch({type: 'ADD_TASK', payload: text});
  }
  function handleDeleteTask(id){
    projectDispatch({type: "DELETE_TASK" , payload: id});
  }

  function handleSelectProject(id) {
    projectDispatch({type: "SELECT_PROJECT" , payload: id})
  }
  function handleStartAddProject() {
   projectDispatch({type: "START_ADD_PROJECT"});
  }


  function handleAddProject(projectData) {
    projectDispatch({type: "ADD_PROJECT", payload: projectData});
  }
  function handleDeleteProject(){
    projectDispatch({type: "DELETE_PROJECT"});
  }

  function handleCancelAddProject(){
   projectDispatch({type: "CANCEL_ADD_PROJECT"});
  }

  const CtxValue ={
    selectedProjectId: projectsState.selectedProjectId,
    projects: projectsState.projects,
    tasks: projectsState.tasks,
    selectProject : handleSelectProject,
    startAddProject : handleStartAddProject,
    addProject : handleAddProject,
    cancelAddProject: handleCancelAddProject,
    deleteProject : handleDeleteProject,
    addTask : handleAddTask,
    deleteTask : handleDeleteTask,
  }

 return (
        <ProjectContext.Provider value={CtxValue}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;