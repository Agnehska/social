import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import SideBar from './components/SideBar';
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='*' element={<SideBar />} />
        {/* <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/post/:id' element={<Post />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
