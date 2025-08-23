import AddTask from "./components/AddTask";
import Navbarr from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbarr />
      </header>
      <main className="bg-azul">
        <AddTask />
      </main>
    </>
  );
}

export default App;
