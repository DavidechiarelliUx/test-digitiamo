import { useState } from 'react'

import './App.scss';
import FormComponent from './components/form-component';
import UrlInfoBlock from './components/infoUrl';
import HttpBlock1 from './components/HttpRequestBlock1';
import HttpBlock2 from './components/HttpRequestBlock2';

function App() {

  const [submittedUrl, setSubmittedUrl] = useState("");

  const handleFormSubmit = (url) => {
    setSubmittedUrl(url);
  };

  return (
    <>
  <div>
    <h1>Hello world</h1>
    <FormComponent onSubmit={handleFormSubmit}/>
    <div className="blockContainer">
    <UrlInfoBlock url={submittedUrl}/>
    <HttpBlock1/>
    <HttpBlock2/>
    </div>
  </div>
    </>
  )
}

export default App;
