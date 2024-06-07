import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import Button from "./components/button/button.js"
import ListComponents from './components/list/list.js';
import HeadingComponent from './components/classComponent/headings.js';

function Hello(){
  const employee={
    name:"Rajasree"
  }

return(
  <>
  <HeadingComponent/>
  </>
  // <div>
  //   <h1>Hello My World {employee.name}</h1>

  //   <Button/>
  //   <ListComponents/>
    
  // </div>
)
}


export default Hello;

