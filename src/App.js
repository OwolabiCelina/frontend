import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutePage from './router-page';

function App() {
  return (
    <div>
      <BrowserRouter>
      <RoutePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
