import Header from './components/Header';
import Home from './components/Home';
import './scss/global.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='maincontainer'>
        <Home />
      </div>
    </div>
  );
}

export default App;
