import logo from './logo.svg';
import './App.css';
import { Button } from './Components/Button';

function App() {
  return (
    <div className="App">
    <Button type="primary">Primary Key</Button>
    <Button type="default">Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type='text'>Text Button</Button>
    <Button type='link'>Link Button</Button>
    </div>
  );
}

export default App;
