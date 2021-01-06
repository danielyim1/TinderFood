import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button> 
          Left!
          </button>
          <button>
            Right!
            </button>
        <p >Tinder For Food!! 
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tinder For Food!
        </a> */}
      </header>
    </div>
  );
}

export default App;
