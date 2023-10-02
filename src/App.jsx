import { useState } from 'react'

import './App.scss';
import FormComponent from './components/form-component';
import UrlInfoBlock from './components/infoUrl';
import HttpBlock1 from './components/HttpRequestBlock1';
import HttpBlock2 from './components/HttpRequestBlock2';

function App() {
 

  return (
    <>
  <div>
    <h1>Hello world</h1>
    <FormComponent/>
    <div className="blockContainer">
    <UrlInfoBlock/>
    <HttpBlock1/>
    <HttpBlock2/>
    </div>
  </div>
    </>
  )
}

export default App;
