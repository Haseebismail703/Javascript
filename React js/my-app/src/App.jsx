import logo from './logo.svg';
import './App.css';

function App() {

  let arr = [
    {
      Name1 : 'Haseeb',
      Roll1 : 10
    },
    {
      Name2 : 'Haseeb',
      Roll2 : 10
    },
    {
      Name3 : 'Haseeb',
      Roll3 : 10
    }
  ]
  
  return (
    <div className="App">
      <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
      {
        arr.Name1
      }
      </header>

    </div>
  );
}

export default App;