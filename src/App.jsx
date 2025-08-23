import AddTask from "./components/AddTask";
import Navbarr from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbarr />
      </header>
      <main>
        <AddTask />
      </main>
    </>
  );
}

export default App;
