import React from 'react';
import './App.css';
import Header from "./header/Header";
import Page from "./page/Page";

function App() {
  return (
    <div className='page-container'>
      <Header/>
      <Page/>
    </div>
  );
}

export default App;
