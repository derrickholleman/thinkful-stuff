import './App.css';
import SubButton from './SubButton';
import CountButton from './CountButton'
import IncrementButtons from './IncrementButton';
import CoinTossCounter from './CoinTossCounter';

function App() {
  return (
    <div className="App">
      <SubButton />
      <CountButton />
      <IncrementButtons />
      <CoinTossCounter />
    </div>
  );
}

export default App;
