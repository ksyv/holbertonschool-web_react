import './App.css';
import holbertonLogo from '../assets/holberton-logo.jpg';
import { getCurrentYear, getFooterCopy } from './utils/utils';
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <div className="App">
      <div className='root-notifications'>
        <Notifications/>
      </div>
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="holberton logo" />
        <h1>School dashboard</h1>
      </header>

      <main role="main" className="App-body">
        <p>Login to access the full dashboard</p>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          
          <button type="button">OK</button>
        </div>
      </main>

      <footer className="App-footer">
        <p>Copyright {getCurrentYear()} - {getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;