import React from 'react';
import './App.css'; 
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (

    <div className="App">

      <div className='root-notifications'>
        <Notifications/>
      </div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;