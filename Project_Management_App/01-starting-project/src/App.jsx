import MainApp from "./components/MainApp.jsx";
import ProjectContextProvider from "./store/project-context.jsx";

function App() {
  return (
    <ProjectContextProvider>
      <MainApp />
    </ProjectContextProvider>
  );
}

export default App;
