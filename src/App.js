import './App.css';
import ContactForm from './componats/ContactForm';
import Counter from './componats/Counter';
import DataGrid from './componats/DataGrid.jsx';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './componats/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Counter></Counter>}></Route>
          <Route path="/grid" element={<DataGrid/>}></Route>
          <Route path="/form" element={<ContactForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
