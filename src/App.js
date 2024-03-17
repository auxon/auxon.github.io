import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
const bitwork = require('bitwork')
const bit = new bitwork({ peer: { user: "root", pass: "yg_(/`!kyAKc/`ZQ<miSvF0}D+6tOs{N~{/" } } )

function App() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    bit.on("ready", async () => {
      bit.on("mempool", (e) => {
        console.log(e)
      })
    })
    bit.onblock = async (block) => {
      console.log('bitwork block', block)
      setBlocks(currentBlocks => [...currentBlocks, block]);
    }
    bit.on("error", async (err) => {
      console.log('bitwork error', err)
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {blocks.map((block, index) => (
            <div key={index}>
              <pre>{JSON.stringify(block, null, 2)}</pre>
            </div>
          ))}
        </div>
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
