// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [message, setMessage] = useState('Loading...');
  const [status, setStatus] = useState('checking');

  useEffect(() => {
    fetch('http://localhost:8000/api/hello/')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
        setStatus('success');
      })
      .catch(err => {
        setMessage('Cannot connect to Django backend!');
        setStatus('error');
      });
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h1>React Frontend</h1>

      <div className={`alert mt-4 ${status === 'success' ? 'alert-success' : status === 'error' ? 'alert-danger' : 'alert-warning'}`}>
        <h4>Backend says:</h4>
        <p className="mb-0 fs-5">{message}</p>
      </div>

      <div className="mt-3">
        {status === 'success' && <span className="badge bg-success fs-6">✅ Connected to Django</span>}
        {status === 'error' && <span className="badge bg-danger fs-6">❌ Connection Failed</span>}
        {status === 'checking' && <span className="badge bg-warning fs-6">⏳ Checking...</span>}
      </div>
    </div>
  );
}

export default App;