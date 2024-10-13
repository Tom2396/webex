import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import MainApp from './MainApp';

function App() {
  return (

    <BrowserRouter>
    <MainApp/>
    </BrowserRouter>
  );
}

export default App;
