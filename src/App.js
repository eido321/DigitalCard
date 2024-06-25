import './App.css';
import React, { useState, useCallback } from 'react';
import Footer from './components/Footer';
import Files from './components/Files';
import Explorer from './components/Explorer';
import FileManager from './components/FileManager';
import AdobeWindow from './components/AdobeWindow';
import ExFileManager from './components/ExFileManager';
import FormWindow from './components/FormWindow';

function App() {
  const [showExplorer, setShowExplorer] = useState(false);
  const [showFileManager, setShowFileManager] = useState(false);
  const [showAdobe, setShowAdobe] = useState(false);
  const [showExFileManager, setShowExFileManager] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const setDisplay = useCallback((value) => {
    setShowExplorer(value);
  }, []);

  const setFileManager = useCallback((value) => {
    setShowFileManager(value);
  }, []);

  const setAdobe = useCallback((value) => {
    setShowAdobe(value);
  } ,[]);

  const setExFileManager = useCallback((value) => {
    setShowExFileManager(value);
  } ,[]);

  const setForm = useCallback((value) => {
    setShowForm(value);
  } ,[]);

  return (
    <div className="App">

      <Files resume={setFileManager} form={setExFileManager} />
      <FileManager display={showFileManager} setDisplay={setFileManager} adobe={setAdobe}  />
      <ExFileManager display={showExFileManager} setDisplay={setExFileManager} adobe={setForm} />
      <AdobeWindow display={showAdobe} setDisplay={setAdobe} />
      <FormWindow display={showForm} setDisplay={setForm} />
      <Explorer display={showExplorer} setDisplay={setDisplay} />
      <Footer setDisplay={setDisplay} />
    </div>
  );
}

export default App;
