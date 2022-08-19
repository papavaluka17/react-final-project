import { Route, Routes } from 'react-router-dom';
import BookaRoom from './components/BookaRoom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Roominfo from './components/Roominfo';
import Welcome from './components/Welcome';
import './scss/global.scss'

function App() {
  return (
    <div >
      <Header />
      <div className='maincontainer'>
        <Routes>
        <Route path="/" element={<Welcome />} />
          <Route path="/Main" element={<Main />} />
          <Route path="BookaRoom" element={<BookaRoom />} />
          <Route path="BookaRoom/:id" element={<Roominfo />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
