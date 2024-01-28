import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage, PostPage } from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<MainPage/>}/>
        <Route path='/post/:id' element={<PostPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;



