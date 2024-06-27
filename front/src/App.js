import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
