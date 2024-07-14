import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SideBar from './components/SideBar';
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='*' element={<SideBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
