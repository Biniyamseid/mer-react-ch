import logo from './logo.svg';
import './App.css';
import ActorsList from './components/ActorsList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Actors</h1>
      </header>
      <ActorsList />
    </div>
  );


}


export default App;



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
// }
