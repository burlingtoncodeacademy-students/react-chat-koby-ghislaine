import logo from './logo.svg';
import './App.css';
import './components/mainRoom'
import MainRoom from './components/mainRoom';

function App() {
  return (
    <div className="App">
      <h1>Behold, the chat room!</h1>
      <MainRoom/>
    </div>
  );
}

export default App;
