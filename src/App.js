
import './App.css';
import Vision from './Component/STP_vision/Vision';
import TimeCounter from './Component/TimeCounter/TimeCounter';
import { AppProvider } from './Context';

function App() {
  
  return (
    <div className="App">
      <AppProvider child={
        <>
          <Vision/>
          <TimeCounter/>
        </>
      }>
      </AppProvider>

    </div>  
  );
}

export default App;
