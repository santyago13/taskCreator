import AddTask from "./components/AddTask";
import Navbarr from "./components/Navbar";
import FooterTask from "./components/FooterTask";

function App() {
  return (
    <>
      <header>
        <Navbarr />
      </header>
      <main className="bg-azul">
        <AddTask />
      </main>
      <footer>
        <FooterTask/>
      </footer>
    </>
  );
}

export default App;
