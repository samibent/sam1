// import logo from './logo.svg';
import './App.css';

function App() {
    const texte = "Premières petit manips";
    const containerClassName = "App";
    return ( <
        div className = { containerClassName } >
        <
        h1 > Hello!! < /h1> <
        p > { texte.toUpperCase() } < /p> <
        /div>

    );
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
}

export default App;