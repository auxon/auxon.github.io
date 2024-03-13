import logo from './logo.svg';
import './App.css';
const bitwork = require('bitwork')
const bit = new bitwork({ rpc: { user: "root", pass: "nfhRO+3[" } })
bit.onmempool = (tx) => {
  console.log('bitwork tx', tx)
}
bit.onblock = (block) => {
  console.log('bitwork block', block)
} 
bit.on("ready", () => {
  console.log('bitwork ready')
})
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
