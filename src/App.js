import logo from './logo.svg';
import aws from './aws.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: 'flex'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={aws} className="App-logo" alt="logo" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS HOSTING BY RAJENDRA SINH RATHOD
        </a>
      </header>
    </div>
  );
}

export default App;
