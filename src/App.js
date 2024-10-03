import Routing from './Router/Routing';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './Components/Header';

function App() {
  return (
    <>
    <Header/>
    <Routing/>
    </>
  );
}

export default App;
