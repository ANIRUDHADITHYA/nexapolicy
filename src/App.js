import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { AccountContextProvider } from './ContextAPI/AccountContext';
import Protected from './ContextAPI/Protected';
import Dashboard from './Pages/Dashboard/Dashboard';
import NewPolicy from './Pages/NewPolicy/NewPolicy';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AccountContextProvider><Home /></AccountContextProvider>} />
          <Route exact path="/dashboard" element={
            <AccountContextProvider>
              <Protected>
                <Dashboard />
              </Protected>
            </AccountContextProvider>
          } />
          <Route exact path="/take-new-policy" element={
            <AccountContextProvider>
              <Protected>
                <NewPolicy/>
              </Protected>
            </AccountContextProvider>
          } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;