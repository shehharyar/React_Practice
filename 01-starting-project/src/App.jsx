import NewProject from "./components/NewProject";
import PorjectsSidebar from "./components/PorjectsSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
        <PorjectsSidebar/>
        <NewProject/>
    </main>
  );
}

export default App;
