import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router } from 'react-router';
import Login from './components/Login';

function App() {
  return (
   <Router>
    <div className='auth-wrapper'>
      <div className='auth-inner'>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/sign-in" element={<Login/>}/>
          <Route exact path="/sign-up" element={<Login/>}/>
        </Routes>

      </div>
    </div>
   </Router>
  );
}

export default App;
