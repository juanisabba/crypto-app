import { makeStyles } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import HomePage from './pages/HomePage';
import './App.css'

function App() {

  const usestyles = makeStyles(()=>({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh'
    }
  }))

  const classes = usestyles()

  return (
    <Router>
      <div className={classes.App}>
        <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/coins/:id' element={<CoinPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
