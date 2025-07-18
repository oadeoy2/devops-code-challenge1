import React, { useEffect, useState } from 'react';
import './App.css';
import config from './config';

function App() {
  const [successMessage, setSuccessMessage] = useState();
  const [failureMessage, setFailureMessage] = useState();

  useEffect(() => {
    const getId = async () => {
      try {
        const resp = await fetch(`${config.backendUrl}/api/guid`);
        const data = await resp.json();
        setSuccessMessage(data.message);
      } catch (e) {
        setFailureMessage(e.message);
      }
    };
    getId();
  }, []); // ✅ ensures useEffect runs only once

  return (
    <div className="App">
      {!failureMessage && !successMessage && 'Fetching...'}
      {failureMessage && <p style={{ color: 'red' }}>{failureMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default App;
