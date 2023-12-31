import { useState } from 'react'

import './App.scss';
import FormComponent from './components/form-component';
import UrlInfoBlock from './components/infoUrl';
import HttpBlock1 from './components/HttpRequestBlock1';
import HttpBlock2 from './components/HttpRequestBlock2';
import ShareLink from './components/share-link-component';
import BottomSheet from './components/BottomSheet';

function App() {

  const [submittedUrl, setSubmittedUrl] = useState("");

  const handleFormSubmit = (url) => {
    setSubmittedUrl(url);
  };

  return (
    <>
  <div>
    <FormComponent onSubmit={handleFormSubmit}/>
    <div className="blockContainer">
    <UrlInfoBlock url={submittedUrl}/>
    <HttpBlock1/>
    <HttpBlock2/>
    </div>
    <ShareLink/>
  </div>
  <BottomSheet/>
    </>
  )
}

export default App;
