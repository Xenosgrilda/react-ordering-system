import React from 'react';
import './App.css';
import Header from "./header/Header";
import Page from "./page/Page";
import {useSelector} from "react-redux";

function App() {
  const productState = useSelector(state => state.product);
    console.log(productState);
  return (
    <div className='kabum-app-container'>
      <Header/>
      <Page/>
    </div>
  );
}

export default App;
