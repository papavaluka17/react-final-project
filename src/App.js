import { Route, Routes } from 'react-router-dom';
import BookaRoom from './components/BookaRoom';
import Header from './components/Header';
import Main from './components/Main';
import Welcome from './components/Welcome';
import './scss/global.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='maincontainer'>
        <Routes>
        <Route path="/" element={<Welcome />} />
          <Route path="/Main" element={<Main />} />
          <Route path="BookaRoom" element={<BookaRoom />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;